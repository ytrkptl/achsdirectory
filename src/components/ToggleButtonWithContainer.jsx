import { Component } from "react";
import "./ToggleButtonWithContainer.css";
// import Particles from "@tsparticles/react";
import ToggleButton from "./ToggleButton";
import ParticlesComponent from "./ParticlesComponent";

class ToggleButtonWithContainer extends Component {
  constructor() {
    super();
    this.state = {
      isToggleOn: false,
      message: "Turn Animation On",
    };
  }

  handleClick = () => {
    if (!this.state.isToggleOn) {
      this.setState({ isToggleOn: true, message: "Turn Animation Off" });
    } else {
      this.setState({ isToggleOn: false, message: "Turn Animation On" });
    }
  };

  render() {
    return (
      <div className="switchContainer">
        {!this.state.isToggleOn ? <div></div> : <ParticlesComponent />}
        <ToggleButton handleClick={this.handleClick} />
        <h4 className="switchLabel">{this.state.message}</h4>
      </div>
    );
  }
}

export default ToggleButtonWithContainer;
