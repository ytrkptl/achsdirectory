import { createContext, useEffect, useState } from "react";
import data from "@/data/data.json"; // Assuming this is your contacts data

const ContactsContext = createContext();

const ContactsProvider = ({ children }) => {
  const [contactsNew, setContactsNew] = useState(data); // Initialize with data

  useEffect(() => {
    setContactsNew(data); // Set contacts data
    return () => setContactsNew([]); // Clean up
  }, []);

  if (!contactsNew || contactsNew?.length < 1) return <h1>Loading...</h1>;

  return (
    <ContactsContext.Provider value={{ contactsNew, setContactsNew }}>
      {children}
    </ContactsContext.Provider>
  );
};

export { ContactsContext, ContactsProvider };
