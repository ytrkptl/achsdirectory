import React, { Component } from "react";
import CardList2 from "../components/CardList2";
import NavTabs from "../components/NavTabs";
import Header from "../components/Header";
import Footer from "../components/Footer";
import IndiCard from "../components/IndiCard";
import AdminSignIn from "../components/Admin/AdminSignIn";
import AdminTabs from "../components/Admin/AdminTabs";
import AboutCard from "../components/AboutCard";
// import ReactGA from "react-ga";
import "./App.css";
import { API_URL } from "../config";

// ReactGA.initialize(`${process.env.REACT_APP_GA_TRACKING_ID}`);
// ReactGA.pageview(window.location.pathname + window.location.search);

class App extends Component {
  constructor() {
    super();
    this.state = {
      allmovies: [],
      movies: [],
      route: "home",
      searchfield: "",
      indiCard: false,
      cardNum: 0,
      scrollPosition: 0,
      navMenu: false,
      isAdmin: false,
      adminRoute: "adminHome",
    };
  }
  componentDidMount() {
    fetch(`${API_URL}/home`)
      .then((response) => response.json())
      .then((users) => this.setState({ allmovies: users, movies: users }));
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  requestIndiCard = (value, item) => {
    if (value) {
      this.setState({ cardNum: item, indiCard: value });
    } else {
      this.setState({ indiCard: value, route: this.state.route });
    }
  };

  onRouteChange = (route) => {
    this.requestIndiCard(false, 0);
    var searchPlaceHolder = document.getElementById("searchBox");
    searchPlaceHolder.value = "";
    this.setState({ searchfield: "" });
    if (route === "home") {
      this.setState({ movies: this.state.allmovies, route: route });
    } else {
      const filteredRoute = this.state.allmovies.filter((movie) => {
        return movie.contacts.department.includes(route);
      });
      this.setState({ movies: filteredRoute, route: route });
      this.scrollUp();
    }
  };
  adminRouteChange = (adminRoute) => {
    this.setState({ adminRoute: adminRoute });
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
    const {
      searchfield,
      movies,
      indiCard,
      cardNum,
      route,
      navMenu,
      isAdmin,
    } = this.state;
    const filteredContacts = movies.filter((movie) => {
      return (
        movie.contacts.lastname
          .toLowerCase()
          .includes(searchfield.trim().toLowerCase()) ||
        movie.contacts.firstname
          .toLowerCase()
          .includes(searchfield.trim().toLowerCase()) ||
        movie.contacts.email
          .toLowerCase()
          .includes(searchfield.toLowerCase()) ||
        movie.contacts.phone.includes(searchfield)
      );
    });
    return (
      <div className="mainContainer">
        <Header className="headerDiv" searchChange={this.onSearchChange} />
        {navMenu === true ? (
          <AdminTabs
            adminRouteChange={this.adminRouteChange}
            className="navDiv"
            logoutAdmin={this.logoutAdmin}
          />
        ) : (
          <NavTabs
            onRouteChange={this.onRouteChange}
            className="navDiv"
            route={route}
          />
        )}
        <div id="myDIV" className="mainDiv">
          {route === "admin" ? (
            <AdminSignIn
              onMenuChange={this.onMenuChange}
              logoutAdmin={this.logoutAdmin}
              isAdmin={isAdmin}
              adminRoute={this.state.adminRoute}
            />
          ) : !movies.length ? (
            route === "about" ? (
              <AboutCard />
            ) : (
              <h1>Loading contacts...</h1>
            )
          ) : (
            <div>
              {!filteredContacts.length ? (
                <h1>No matches found. Try searching again!</h1>
              ) : !indiCard ? (
                <CardList2
                  movies={filteredContacts}
                  requestIndiCard={this.requestIndiCard}
                />
              ) : (
                <IndiCard
                  {...filteredContacts[cardNum].contacts}
                  id={cardNum}
                  requestIndiCard={this.requestIndiCard}
                />
              )}
            </div>
          )}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
