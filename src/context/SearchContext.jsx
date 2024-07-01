import { createContext, useState } from "react";

const SearchContext = createContext();

const SearchProvider = ({ children }) => {
  const [searchfield, setSearchField] = useState("");

  return (
    <SearchContext.Provider value={{ searchfield, setSearchField }}>
      {children}
    </SearchContext.Provider>
  );
};

export { SearchContext, SearchProvider };
