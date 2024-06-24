import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Data from "../data.json";
import "./IndiCard.css";

const IndiCard = () => {
  const [contactInfo, setContactInfo] = useState(null);
  const { contactId } = useParams();

  useEffect(() => {
    function findItem() {
      return Data.find((item) => item.id === Number(contactId)).contacts;
    }
    let contactItem = findItem();
    console.log(contactItem);

    // Rest of the code...
    setContactInfo(contactItem);
    console.log(contactInfo);
    return () => {
      setContactInfo(null);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contactId]);

  const {
    id,
    firstname,
    lastname,
    phone,
    email,
    urlNew,
    firstblock,
    secondblock,
    thirdblock,
    fourthblock,
    lunch,
  } = contactInfo ?? {};
  const name = firstname + " " + lastname;

  return (
    <div className="parentDivDisplay">
      <Link to="/:contactId" className="buttonStyle">
        Go Back
      </Link>
      <div className="indiCardDetails" key={id}>
        <div className="gridItNow">
          <div className="subCardDetails growCard">
            <div className="indiImgContainer">
              <img className="indiImgRounded" alt="robots" src={urlNew} />
            </div>
            <div className="underTextContainer">
              <h3 className="subjectTitle2">{name}</h3>
              <p className="phoneTitle2">{phone}</p>
              <p className="emailTitle2">{email}</p>
            </div>
          </div>
          <div className="indiTextContainer">
            <p className="indiEmailTitle">{`Email: ${email}`}</p>
            <p className="indiScheduleTitle">{"Schedule"}</p>
            <div className="subColumn">
              <p className="indiLeftCol">{"1st block: "}</p>
              <p className="indiRightCol">{firstblock}</p>
              <p className="indiLeftCol">{"2nd block: "}</p>
              <p className="indiRightCol">{secondblock}</p>
              <p className="indiLeftCol">{"3rd block: "}</p>
              <p className="indiRightCol">{thirdblock}</p>
              <p className="indiLeftCol">{"Lunch: "}</p>
              <p className="indiRightCol">{lunch}</p>
              <p className="indiLeftCol">{"4th block: "}</p>
              <p className="indiRightCol">{fourthblock}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndiCard;
