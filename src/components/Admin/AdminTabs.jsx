import { Component } from "react";
import Hamburger from "../Hamburger";
import "./AdminTabs.css";

class AdminTabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: true,
      bgHome: "#6c5ce7",
      isToggleOn: true,
      pebg: "#74b9ff",
      display: "none",
      tabNames: [
        "adminHome",
        "addEmployee",
        "viewEmployee",
        "editEmployee",
        "deleteEmployee",
      ],
    };
  }

  setTabColor = (adminRoute, isActive) => {
    this.props.adminRouteChange(adminRoute);
    if (!isActive) {
      this.setState({ bgHome: "#74b9ff" });
    }
    let buttonGroup2 = document.getElementsByClassName("btn-group2");
    for (var i = 0; i < buttonGroup2[0].children.length; i++) {
      buttonGroup2[0].children[i].style.backgroundColor = "#74b9ff";
    }
    if (this.state.tabNames.includes(adminRoute)) {
      let x = document.getElementById(adminRoute);
      x.style.backgroundColor = "#6c5ce7";
    } else {
      this.setState({ isToggleOn: false, pebg: "#6c5ce7" });
    }
  };
  toggleDropdown = () => {
    if (!this.state.isToggleOn) {
      this.setState({ isToggleOn: true, display: "none" });
    } else {
      this.setState({ isToggleOn: false, display: "block" });
    }
  };

  render() {
    return (
      <div className="btn-group2">
        <button
          id="adminHome"
          style={{ backgroundColor: this.state.bgHome }}
          onClick={() => this.setTabColor("adminHome", true)}
          href="#adminHome"
        >
          Admin Home
        </button>
        <button
          id="addEmployee"
          onClick={() => this.setTabColor("addEmployee", false)}
          href="#addEmployee"
        >
          Add Employee
        </button>
        <button
          id="viewEmployee"
          onClick={() => this.setTabColor("viewEmployee", false)}
          href="#viewEmployee"
        >
          View Employee
        </button>
        <button
          id="editEmployee"
          onClick={() => this.setTabColor("editEmployee", false)}
          href="#editEmployee"
        >
          Edit/Update Employee
        </button>
        <button
          id="deleteEmployee"
          onClick={() => this.setTabColor("deleteEmployee", false)}
          href="#deleteEmployee"
        >
          Delete Employee
        </button>
        <div onMouseEnter={() => this.toggleDropdown()}>
          <button id="hamburger3" href="#other">
            <Hamburger />
          </button>
          <div onMouseLeave={() => this.toggleDropdown()}>
            <button
              style={{ display: this.state.display }}
              className="dropbtninactive2"
              onClick={() => this.props.logoutAdmin()}
            >
              Log Out
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminTabs;
