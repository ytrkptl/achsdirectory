import { Component, Suspense } from "react";
import Header from "./components/Header";
import RoutesComponent from "./Routes";
import Footer from "./components/Footer";
import ErrorBoundary from "./components/ErrorBoundary";
import "./App.css";

const initialState = {
  searchfield: "",
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      ...initialState,
    };
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  onMenuChange = () => {
    this.setState({ navMenu: true, isAdmin: true, adminRoute: "adminHome" });
  };

  logoutAdmin = () => {
    this.setState({ navMenu: false, isAdmin: false });
  };

  scrollUp() {
    let element = document.getElementById("myDIV");
    element.scrollTop = 0;
  }

  render() {
    return (
      <div className="mainContainer">
        <Header className="headerDiv" searchChange={this.onSearchChange} />
        <ErrorBoundary>
          <Suspense fallback={<h1>Loading...</h1>}>
            <div id="myDIV" className="mainDiv">
              <RoutesComponent searchfield={this.state.searchfield} />
            </div>
          </Suspense>
        </ErrorBoundary>
        <Footer />
      </div>
    );
  }
}

export default App;
