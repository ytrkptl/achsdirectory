import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import ButtonLikeLink from "./ButtonLikeLink";
import { ContactsContext } from "@/context/ContactsContext";
import CardSkeleton from "./prime/CardSkeleton/CardSkeleton";
import "./ContactDetails.css";

const ContactDetails = ({ itemNum, contactInfoFromCardList }) => {
  const { contactsNew } = useContext(ContactsContext);
  const [contactInfo, setContactInfo] = useState(null);
  const [loading, setLoading] = useState(false);
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

  const {
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

export default ContactDetails;
