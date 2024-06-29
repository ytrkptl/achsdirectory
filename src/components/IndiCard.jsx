import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ButtonLikeLink from "./ButtonLikeLink";
import Data from "../data.json";
import "./IndiCard.css";

const IndiCard = ({ itemNum, contactInfoFromCardList }) => {
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

  if (!contactInfo) return <div>Loading...</div>;

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
  } = contactId ? contactInfo : contactInfoFromCardList;
  const name = firstname + " " + lastname;

  return (
    <div className="parentDivDisplay">
      <ButtonLikeLink text="Go Back" goBack={true} />
      <div className="indiCardDetails" key={Math.random()}>
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
