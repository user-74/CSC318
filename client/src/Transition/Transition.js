import "./Transition.css";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

class Transition extends React.Component {
  constructor(props) {
    super(props);
    if (this.props.location.state.progress === 0) {
      this.state = {
        progress: this.props.location.state.progress,
        message: "Let's do some Dynamic Stretching",
      };
    } else if (this.props.location.state.progress === 1) {
      this.state = {
        progress: this.props.location.state.progress,
        message: "Let's do some Light Exercises",
      };
    } else if (this.props.location.state.progress === 2) {
      this.state = {
        progress: this.props.location.state.progress,
        message: "Let's see what the plan is for today:",
      };
    } else {
      this.state = {
        progress: this.props.location.state.progress,
        message: "Lets finish up with some Static Stretching",
      };
    }
  }

  render() {
    return (
      <div className="Transition">
        <div className="transition-message">
          <span className="transition-title">{this.state.message}</span>
        </div>
        <Link
          className="link"
          to={{
            pathname: "./homepage",
            state: {
              progress: this.state.progress,
            },
          }}
        >
          <Button variant="contained" className="transition-home">
            <span className="transition-text">Return Home</span>
          </Button>
        </Link>
        <Link
          className="link"
          to={{
            pathname: this.state.progress === 2 ? "./trainer" : "./video",
            state: {
              progress: this.state.progress,
            },
          }}
        >
          <Button variant="contained" className="transition-next">
            <span className="transition-text">Continue</span>
          </Button>
        </Link>
      </div>
    );
  }
}

export default Transition;
