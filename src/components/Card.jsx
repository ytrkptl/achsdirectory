import { Link, useParams } from "react-router-dom";
import { Fragment, useEffect, useState } from "react";
import Data from "../data.json";
import "./Card.css";

const Card = ({ itemNum, contactInfoFromCardList }) => {
  const [contactInfo, setContactInfo] = useState(null);
  const { contactId } = useParams();

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

  if (!contactInfo) return <div>Loading...</div>;

  const { firstname, lastname, phone, email, urlNew, id } = contactId
    ? contactInfo
    : contactInfoFromCardList;
  const name = firstname + " " + lastname;

  return (
    <Fragment>
      {contactId ? (
        <Link to={`/${id}`} className="buttonStyle">
          Go Back
        </Link>
      ) : null}
      <Link className="CardDetails growCard2" to={`/${id}/info`}>
        <div className="imgContainer">
          <img className="imgRounded" alt="robots" src={urlNew} />
        </div>
        <div className="textContainer">
          <h3 className="subjectTitle">{name}</h3>
          <p className="phoneTitle">{phone}</p>
          <p className="emailTitle">{email}</p>
        </div>
      </Link>
    </Fragment>
  );
};

export default Card;
