import { SearchContext } from "@/context/SearchContext";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";
import { useContext } from "react";

const SearchBox = () => {
  const { searchfield, setSearchField } = useContext(SearchContext);

  return (
    <IconField iconPosition="left">
      <InputIcon className="pi pi-search"> </InputIcon>
      <InputText
        placeholder="Search"
        type="search"
        style={{ width: "100%" }}
        id="searchBox"
        value={searchfield}
        onChange={(e) => setSearchField(e.target.value)}
      />
    </IconField>
  );
};

export default SearchBox;
