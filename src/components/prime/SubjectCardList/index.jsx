import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Data from "@/data/data.json";
import Card from "@/components/Card";
import { StyledSubjectCardList } from "./SubjectCardList.styles";

const SubjectCardList = ({ searchfield }) => {
  const [contacts, setContacts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [filterSearchByDepartment, setFilterSearchByDepartment] = useState([]);
  const [loadingContacts, setLoadingContacts] = useState(false);
  const { departmentId } = useParams();

  useEffect(() => {
    setLoadingContacts(true);
    setContacts(Data);

    return () => {
      setLoadingContacts(false);
      setContacts([]);
    };
  }, []);

  useEffect(() => {
    if (departmentId || departmentId) {
      const filteredContactsFound = contacts.filter((item) => {
        return item.contacts.department === departmentId;
      });
      setFilteredContacts(filteredContactsFound);
    }
    return () => {
      setFilteredContacts([]);
    };
  }, [contacts, departmentId, loadingContacts]);

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
    setFilterSearchByDepartment(filteredContactsForSearch);
    setLoadingContacts(false);
    return () => setFilterSearchByDepartment([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchfield]);

  const contactsToUse =
    filterSearchByDepartment.length < 1
      ? filteredContacts
      : filterSearchByDepartment;

  return (
    <StyledSubjectCardList>
      {loadingContacts ? (
        <div>Loading...</div>
      ) : contactsToUse.length < 1 ? (
        <div>No Contacts Found</div>
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
    </StyledSubjectCardList>
  );
};
export default SubjectCardList;
