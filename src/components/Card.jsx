import { Link, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import ButtonLikeLink from "./ButtonLikeLink";
import CardSkeleton from "./prime/CardSkeleton/CardSkeleton";
import { ContactsContext } from "@/context/ContactsContext";
import "./Card.css";

const Card = ({ itemNum, contactInfoFromCardList }) => {
  const { contactsNew } = useContext(ContactsContext);
  const [contactInfo, setContactInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const { contactId } = useParams();

  useEffect(() => {
    setLoading(true);

    const found = contactsNew.find(
      (item) => item.id === Number(contactId) || item.id === Number(itemNum)
    )?.contacts;

    if (!found) {
      setLoading(false);
      setContactInfo(null);
      return;
    }

    setContactInfo(found);
    setLoading(false);

    return () => {
      setContactInfo(null);
      setLoading(false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contactId, itemNum]);

  if (loading) return <CardSkeleton />;

  if (!contactInfo && !loading) {
    return <h1 style={{ color: "hotpink" }}>No contact found!</h1>;
  }

  const { firstname, lastname, phone, email, urlNew, id, department } =
    contactId ? contactInfo : contactInfoFromCardList;
  const name = firstname + " " + lastname;

  return (
    <div style={{ marginTop: `${contactId && "20px"}` }}>
      {contactId ? <ButtonLikeLink to={`/`} text="Go Home" /> : null}
      <Link className="CardDetails growCard2" to={`/${department}/${id}/info`}>
        <div className="imgContainer">
          <img className="imgRounded" alt="robots" src={urlNew} />
        </div>
        <div className="textContainer">
          <h3 className="subjectTitle">{name}</h3>
          <p className="phoneTitle">{phone}</p>
          <p className="emailTitle">{email}</p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
