import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ContactsContext } from "@/context/ContactsContext";
import Card from "@/components/Card";
import "./Home.css";

const ContactPage = () => {
  const { contactsNew } = useContext(ContactsContext);
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [loadingContacts, setLoadingContacts] = useState(true);
  const [itemNum, setItemNum] = useState(0);
  const { pathname } = useLocation();

  useEffect(() => {
    setLoadingContacts(true);
    const filteredContactsById = contactsNew.filter((item) => item.id === Number(pathname.split("/")[2]));
    setItemNum(filteredContactsById.id);
    setFilteredContacts(filteredContactsById);
    setLoadingContacts(false);
    return () => {
      setFilteredContacts([]);
      setLoadingContacts(false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
      <section className="home-section">
        {loadingContacts ? (
          <h1>Loading...</h1>
        ) : (
          <Card itemNum={itemNum} contactInfoFromCardList={filteredContacts} />
        )}
      </section>
  );
};

export default ContactPage;
