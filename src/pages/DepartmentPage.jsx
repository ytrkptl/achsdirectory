import { Fragment, useContext, useEffect, useState } from "react";
import FilteredCardList from "@/components/FilteredCardList";
import { useLocation } from "react-router-dom";
import { SearchContext } from "@/context/SearchContext";
import { ContactsContext } from "@/context/ContactsContext";
import "./Home.css";

const DepartmentPage = () => {
  const { contactsNew } = useContext(ContactsContext);
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [loadingContacts, setLoadingContacts] = useState(false);
  const { searchfield } = useContext(SearchContext);
  const { pathname } = useLocation();

  useEffect(() => {
    setLoadingContacts(true);
    const searchTerm = searchfield.trim().toLowerCase();
    const filteredContactsForSearch = contactsNew.filter((item) => {
      const { lastname, firstname, email, phone, department } = item.contacts;
      const fullName = `${firstname} ${lastname}`;
      const fullNameReversed = `${lastname} ${firstname}`;

      const splitPathname = pathname.split("/").filter((item) => item !== "");
      const departmentUrl = splitPathname[0];

      const isInDepartment = department.toLowerCase() === departmentUrl;

      return (
        isInDepartment &&
        (lastname.toLowerCase().includes(searchTerm) ||
          firstname.toLowerCase().includes(searchTerm) ||
          fullName.toLowerCase().includes(searchTerm) ||
          fullNameReversed.toLowerCase().includes(searchTerm) ||
          email.toLowerCase().includes(searchTerm) ||
          phone.toLowerCase().includes(searchTerm))
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
      {loadingContacts ? (
        <h1>Loading...</h1>
      ) : (
        <section className="home-section">
          <FilteredCardList contacts={filteredContacts} />
        </section>
      )}
    </Fragment>
  );
};

export default DepartmentPage;
