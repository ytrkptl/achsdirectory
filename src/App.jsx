import { Component, Fragment, Suspense } from "react";
import RoutesComponent from "./Routes";
import Footer from "./components/Footer/Footer";
import ErrorBoundary from "./components/ErrorBoundary";
import NavigationBar from "./components/prime/NavigationBar/NavigationBar";
import "primereact/resources/themes/lara-dark-blue/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css";
import { GlobalStyle } from "./styles/GlobalStyles";
import { ParentContainer, StyledMainElement } from "./App.styles";
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
      <Fragment>
        <ErrorBoundary>
          <Suspense fallback={<h1>Loading...</h1>}>
            <GlobalStyle />
            <ParentContainer>
              <NavigationBar searchChange={this.onSearchChange} />
              <StyledMainElement>
                <RoutesComponent searchfield={this.state.searchfield} />
              </StyledMainElement>
              <Footer />
            </ParentContainer>
          </Suspense>
        </ErrorBoundary>
      </Fragment>
    );
  }
}

export default App;
