import { createContext, useEffect, useState } from "react";
import data from "@/data/data.json";

const ContactsContext = createContext();

const ContactsProvider = ({ children }) => {
  const [contactsNew, setContactsNew] = useState(data); // Initialize with data

  useEffect(() => {
    if(contactsNew?.length > 0) return;
    setContactsNew(data);
    return () => {
      setContactsNew([]);
    };
  }, []);

  if (!contactsNew || contactsNew?.length < 1) return <h1>Loading...</h1>;

  return (
    <ContactsContext.Provider value={{ contactsNew, setContactsNew }}>
      {children}
    </ContactsContext.Provider>
  );
};

export { ContactsContext, ContactsProvider };
