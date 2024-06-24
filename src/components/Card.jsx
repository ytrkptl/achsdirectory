/* eslint-disable react/prop-types */
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Data from "../data.json";
import "./Card.css";

const Card = ({ itemNum, contactInfoFromCardList }) => {
  const [contactInfo, setContactInfo] = useState(null);
  const { contactId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    let contactItem;
    if (!contactId) {
      contactItem = contactInfoFromCardList;
      console.log("No contactId");
    } else {
      contactItem = Data.find((item) => item.id === Number(contactId)).contacts;
    }

    // Rest of the code...
    setContactInfo(contactItem);
    return () => {
      setContactInfo(null);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contactId, itemNum]);

  const { firstname, lastname, phone, email, urlNew } = contactId
    ? contactInfo
    : contactInfoFromCardList;
  const name = firstname + " " + lastname;

  const handleClick = (e) => {
    e.preventDefault();
    navigate(`/${contactId}/info`);
  };

  return (
    <div className="CardDetails growCard2" onClick={handleClick}>
      <div className="imgContainer">
        <img className="imgRounded" alt="robots" src={urlNew} />
      </div>
      <div className="textContainer">
        <h3 className="subjectTitle">{name}</h3>
        <p className="phoneTitle">{phone}</p>
        <p className="emailTitle">{email}</p>
      </div>
    </div>
  );
};

export default Card;
