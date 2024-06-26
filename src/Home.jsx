import { Fragment, useEffect, useState } from "react";
import NavTabs from "./components/NavTabs";
import CardList2 from "./components/CardList2";
import Data from "./data.json";
import IndiCard from "./components/IndiCard";
import Card from "./components/Card";
import { Route, Routes } from "react-router-dom";
import "./Home.css";

const FilteredHomeElement = ({ filteredContacts }) => {
  return (
    <Fragment>
      {filteredContacts.length > 0 ? (
        <CardList2 contacts={filteredContacts} />
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
        item.contacts.phone.includes(searchfield)
      );
    });
    setFilteredContacts(filteredContactsForSearch);
    return () => setFilteredContacts([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchfield]);

  const subjectsForDisplay = [
    "Home",
    "Math",
    "Science",
    "English",
    "Social Studies",
    "Special Education",
    "Other",
    "Office",
    "Physical Education",
    "Vocational",
  ];

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
      <NavTabs
        subjectUrls={subjectUrls}
        subjectsForDisplay={subjectsForDisplay}
        onRouteChange={() => {
          console.log("hello");
        }}
      />
      {loadingContacts ? (
        <h1>Loading...</h1>
      ) : (
        <Fragment>
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
                  path={`/${item}`}
                  element={
                    <FilteredHomeElement filteredContacts={filteredContacts} />
                  }
                />
              );
            })}
            <Route path="/:contactId" element={<Card />} />
            <Route path="/:contactId/info" element={<IndiCard />} />
          </Routes>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
