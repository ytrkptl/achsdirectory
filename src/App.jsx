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
import { SearchProvider } from "./context/SearchContext";

class App extends Component {
  render() {
    return (
      <Fragment>
        <ErrorBoundary>
          <Suspense fallback={<h1>Loading...</h1>}>
            <GlobalStyle />
            <ParentContainer>
              <SearchProvider>
                <NavigationBar />
                <StyledMainElement>
                  <RoutesComponent />
                </StyledMainElement>
              </SearchProvider>
              <Footer />
            </ParentContainer>
          </Suspense>
        </ErrorBoundary>
      </Fragment>
    );
  }
}

export default App;
