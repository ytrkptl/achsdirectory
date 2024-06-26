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

  render() {
    return (
      <div className="mainContainer">
        <Header className="headerDiv" searchChange={this.onSearchChange} />
        <ErrorBoundary>
          <Suspense fallback={<h1>Loading...</h1>}>
            <main className="mainDiv">
              <RoutesComponent searchfield={this.state.searchfield} />
            </main>
          </Suspense>
        </ErrorBoundary>
        <Footer />
      </div>
    );
  }
}

export default App;
