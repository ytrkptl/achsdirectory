import { Component, Fragment, Suspense } from "react";
import RoutesComponent from "./Routes";
import Footer from "./components/Footer";
import ErrorBoundary from "./components/ErrorBoundary";
// import "primeflex/primeflex.css";
import "primereact/resources/primereact.css";
import "primereact/resources/themes/lara-dark-blue/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css";

import "./App.css";
import NavigationBar from "./components/prime/NavigationBar/NavigationBar";

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

  render() {
    return (
      <Fragment>
        <ErrorBoundary>
          <Suspense fallback={<h1>Loading...</h1>}>
            <div className="mainContainer">
              <NavigationBar searchChange={this.onSearchChange} />
              <main className="mainDiv">
                <RoutesComponent searchfield={this.state.searchfield} />
              </main>
              <Footer />
            </div>
          </Suspense>
        </ErrorBoundary>
      </Fragment>
    );
  }
}

export default App;
