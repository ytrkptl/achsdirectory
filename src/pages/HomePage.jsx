import { Fragment, useContext, useEffect, useState } from "react";
import FilteredCardList from "@/components/FilteredCardList";
import { useLocation } from "react-router-dom";
import { SearchContext } from "@/context/SearchContext";
import { ContactsContext } from "@/context/ContactsContext";
import "./Home.css";

const Home = () => {
  const { contactsNew } = useContext(ContactsContext);
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [loadingContacts, setLoadingContacts] = useState(true);
  const { searchfield } = useContext(SearchContext);
  const { pathname } = useLocation();

  useEffect(() => {
    setLoadingContacts(true);
    const filteredContactsForSearch = contactsNew.filter((item) => {
      const { lastname, firstname, email, phone } = item.contacts;
      const fullName = `${firstname} ${lastname}`;
      const fullNameReversed = `${lastname} ${firstname}`;
      const searchTerm = searchfield.trim().toLowerCase();

      return (
        lastname.toLowerCase().includes(searchTerm) ||
        firstname.toLowerCase().includes(searchTerm) ||
        fullName.toLowerCase().includes(searchTerm) ||
        fullNameReversed.toLowerCase().includes(searchTerm) ||
        email.toLowerCase().includes(searchTerm) ||
        phone.toLowerCase().includes(searchTerm)
      );
    });
    setFilteredContacts(filteredContactsForSearch);
    setLoadingContacts(false);
    return () => {
      setFilteredContacts([]);
      setLoadingContacts(false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchfield, pathname]);

  return (
    <Fragment>
      <section className="home-section">
        {loadingContacts ? (
          <h1>Loading...</h1>
        ) : (
          <FilteredCardList contacts={filteredContacts} />
        )}
      </section>
    </Fragment>
  );
};

export default Home;
