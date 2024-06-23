import SearchBox from "./SearchBox";
import ToggleButtonWithContainer from "./ToggleButtonWithContainer";
import "./Header.css";

const Header = ({ searchChange }) => {
  return (
    <div className="headerContainer">
      <div className="row1">
        <a href="/" style={{ textDecoration: "none" }}>
          <h1 className="makeFontBigger2">ACHS Directory</h1>
        </a>
        <p className="phoneLabel">123-456-ext.</p>
      </div>
      <div className="searchSwitchContainer">
        <SearchBox searchChange={searchChange} />
        <p className="phoneLabel2">123-456-ext.</p>
        <ToggleButtonWithContainer />
      </div>
    </div>
  );
};

export default Header;
