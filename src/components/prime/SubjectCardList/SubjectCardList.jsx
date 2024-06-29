import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Data from "../../../data.json";
import Card from "../../Card";
import "./SubjectCardList.css";

const SubjectCardList = ({ searchfield }) => {
  const [contacts, setContacts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [filterSearchByDepartment, setFilterSearchByDepartment] = useState([]);
  const [loadingContacts, setLoadingContacts] = useState(true);
  const { departmentId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setContacts(Data);
    setLoadingContacts(false);

    return () => {
      setLoadingContacts(true);
      setContacts([]);
    };
  }, []);

  useEffect(() => {
    console.log(departmentId);
    if (departmentId === "home") {
      navigate("/");
      return;
    }
    const filteredContactsFound = contacts.filter((item) => {
      console.log(typeof item.contacts.department);
      console.log(typeof departmentId);
      return item.contacts.department === departmentId;
    });
    console.log(contacts);
    console.log(filteredContactsFound);
    setFilteredContacts(filteredContactsFound);
    return () => setFilteredContacts([]);
  }, [departmentId, loadingContacts]);

  useEffect(() => {
    const filteredContactsForSearch = filteredContacts.filter((item) => {
      return (
        item.contacts.lastname
          .toLowerCase()
          .includes(searchfield.trim().toLowerCase()) ||
        item.contacts.firstname
          .toLowerCase()
          .includes(searchfield.trim().toLowerCase()) ||
        item.contacts.email.toLowerCase().includes(searchfield.toLowerCase()) ||
        item.contacts.phone.includes(searchfield)
      );
    });
    console.log(filteredContactsForSearch);
    setFilterSearchByDepartment(filteredContactsForSearch);
    return () => setFilterSearchByDepartment([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchfield]);

  const contactsToUse =
    filterSearchByDepartment.length < 1
      ? filteredContacts
      : filterSearchByDepartment;

  return (
    <div className="subjectCardList">
      {contactsToUse.length < 1 ? (
        <div>Loading...</div>
      ) : (
        contactsToUse.map((item, i) => {
          return (
            <Card
              contactInfoFromCardList={item.contacts}
              key={i}
              itemNum={i + 1}
            />
          );
        })
      )}
    </div>
  );
};
export default SubjectCardList;
