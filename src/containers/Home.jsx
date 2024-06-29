import { Fragment, useEffect, useState } from "react";
import CardList from "../components/CardList";
import Data from "../data.json";
import IndiCard from "../components/IndiCard";
import Card from "../components/Card";
import { Route, Routes } from "react-router-dom";
import "./Home.css";
import SubjectCardList from "../components/prime/SubjectCardList/SubjectCardList";

const FilteredHomeElement = ({ filteredContacts }) => {
  return (
    <Fragment>
      {filteredContacts.length > 0 ? (
        <CardList contacts={filteredContacts} />
      ) : (
        <h1>No matches found. Try searching again!</h1>
      )}
    </Fragment>
  );
};

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
      return (
        item.contacts.lastname
          .toLowerCase()
          .includes(searchfield.trim().toLowerCase()) ||
        item.contacts.firstname
          .toLowerCase()
          .includes(searchfield.trim().toLowerCase()) ||
        item.contacts.email.toLowerCase().includes(searchfield.toLowerCase()) ||
        item.contacts.phone.includes(searchfield) ||
        item.contacts.department
          .toLowerCase()
          .includes(searchfield.toLowerCase())
      );
    });
    console.log(filteredContactsForSearch);
    setFilteredContacts(filteredContactsForSearch);
    return () => setFilteredContacts([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchfield]);

  const subjectUrls = [
    "home",
    "math",
    "science",
    "english",
    "socialstudies",
    "sped",
    "other",
    "office",
    "pe",
    "voc",
  ];

  return (
    <Fragment>
      {loadingContacts ? (
        <h1>Loading...</h1>
      ) : (
        <section className="home-section">
          <Routes>
            <Route
              path="/"
              exact
              element={
                <FilteredHomeElement filteredContacts={filteredContacts} />
              }
            />
            {subjectUrls.map((item, i) => {
              return (
                <Route
                  key={i}
                  exact
                  path={`/:departmentId`}
                  element={<SubjectCardList searchfield={searchfield} />}
                />
              );
            })}
            <Route path="/:departmentId/:contactId" element={<Card />} />
            <Route
              path="/:departmentId/:contactId/info"
              element={<IndiCard />}
            />
          </Routes>
        </section>
      )}
    </Fragment>
  );
};

export default Home;
