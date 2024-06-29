import { Component, Fragment, Suspense } from "react";
import RoutesComponent from "./Routes";
import Footer from "./components/Footer";
import ErrorBoundary from "./components/ErrorBoundary";
// import "primeflex/primeflex.css";
import "primereact/resources/primereact.css";
import "primereact/resources/themes/lara-dark-blue/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css";

// import "primereact/resources/themes/lara-light-blue/theme.css";
// import "primereact/resources/themes/lara-light-indigo/theme.css";
// import "primereact/resources/themes/lara-light-purple/theme.css";
// import "primereact/resources/themes/lara-light-teal/theme.css";
// import "primereact/resources/themes/lara-dark-blue/theme.css";
// import "primereact/resources/themes/lara-dark-indigo/theme.css";
// import "primereact/resources/themes/lara-dark-purple/theme.css";
// import "primereact/resources/themes/lara-dark-teal/theme.css";

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
        <div className="mainContainer">
          <NavigationBar searchChange={this.onSearchChange} />
          {/* <Header className="headerDiv" searchChange={this.onSearchChange} /> */}
          <ErrorBoundary>
            <Suspense fallback={<h1>Loading...</h1>}>
              <main className="mainDiv">
                <RoutesComponent searchfield={this.state.searchfield} />
              </main>
            </Suspense>
          </ErrorBoundary>
          <Footer />
        </div>
      </Fragment>
    );
  }
}

export default App;
