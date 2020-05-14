import React from "react";
import "./IndiCard.css";

const IndiCard = ({
  requestIndiCard,
  lastname,
  firstname,
  email,
  phone,
  id,
  url,
  room,
  firstblock,
  secondblock,
  thirdblock,
  fourthblock,
  lunch,
}) => {
  let name = firstname + " " + lastname;
  return (
    <div className="parentDivDisplay">
      <button
        className="buttonStyle"
        onClick={() => requestIndiCard(false, id)}
      >
        Go Back
      </button>
      <div className="indiCardDetails" key={id}>
        <div className="gridItNow">
          <div className="subCardDetails growCard">
            <div className="indiImgContainer">
              <img className="indiImgRounded" alt="robots" src={url} />
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
