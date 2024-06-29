import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ButtonLikeLink from "./ButtonLikeLink";
import Data from "../data.json";
import CardSkeleton from "./prime/CardSkeleton/CardSkeleton";
import "./Card.css";

const Card = ({ itemNum, contactInfoFromCardList }) => {
  const [contactInfo, setContactInfo] = useState(null);
  const { departmentId, contactId } = useParams();

  useEffect(() => {
    let contactItem;
    if (!contactId) {
      contactItem = contactInfoFromCardList;
    } else {
      contactItem = Data.find((item) => item.id === Number(contactId)).contacts;
    }

    setContactInfo(contactItem);

    return () => {
      setContactInfo(null);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contactId, itemNum]);

  if (!contactInfo) return <CardSkeleton />;

  const { firstname, lastname, phone, email, urlNew, id } = contactId
    ? contactInfo
    : contactInfoFromCardList;
  const name = firstname + " " + lastname;

  return (
    <div style={{ marginTop: `${contactId && "20px"}` }}>
      {contactId ? <ButtonLikeLink to={`/`} text="Go Home" /> : null}
      <Link
        className="CardDetails growCard2"
        to={`/${departmentId}/${id}/info`}
      >
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
