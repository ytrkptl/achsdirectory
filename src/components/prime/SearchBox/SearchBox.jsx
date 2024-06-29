import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";

const SearchBox = ({ searchChange }) => {
  return (
    <IconField iconPosition="left">
      <InputIcon className="pi pi-search"> </InputIcon>
      <InputText
        placeholder="Search"
        type="search"
        style={{ width: "100%" }}
        id="searchBox"
        onChange={searchChange}
      />
    </IconField>
  );
};

export default SearchBox;
