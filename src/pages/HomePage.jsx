import { Fragment, useEffect, useState } from "react";
import Data from "@/data/data.json";
import FilteredCardList from "@/components/FilteredCardList";
import ContactDetails from "@/components/ContactDetails";
import Card from "@/components/Card";
import SubjectCardList from "@/components/prime/SubjectCardList";
import BrokenPageComponent from "@/components/BrokenPageComponent/BrokenPage";
import { SubjectUrls } from "@/data/subjectUrls";
import { Route, Routes } from "react-router-dom";
import "./Home.css";

const Home = ({ searchfield }) => {
  const [contacts, setContacts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [loadingContacts, setLoadingContacts] = useState(true);

  useEffect(() => {
    setContacts(Data);
    setFilteredContacts(Data);
    setLoadingContacts(false);

    return () => {
      setLoadingContacts(true);
      setContacts([]);
      setFilteredContacts([]);
    };
  }, [loadingContacts]);

  useEffect(() => {
    const filteredContactsForSearch = contacts.filter((item) => {
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
    return () => setFilteredContacts([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchfield]);

  return (
    <Fragment>
      {loadingContacts ? (
        <h1>Loading...</h1>
      ) : (
        <section className="home-section">
          <Routes>
            <Route
              path="/"
              index
              element={<FilteredCardList contacts={filteredContacts} />}
            />
            {SubjectUrls.map((subject) => {
              return (
                <Route
                  key={subject}
                  path={`/:departmentId`}
                  element={<SubjectCardList searchfield={searchfield} />}
                />
              );
            })}
            <Route exact path="/:departmentId/:contactId" element={<Card />} />
            <Route
              exact
              path="/:departmentId/:contactId/info"
              element={<ContactDetails />}
            />
            <Route path="*" element={<BrokenPageComponent />} />
          </Routes>
        </section>
      )}
    </Fragment>
  );
};

export default Home;
