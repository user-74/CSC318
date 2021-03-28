import "./Trainer.css";
import React from "react";
import Database from "../Database";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

class Trainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: this.props.location.state.progress,
    };
  }

  render() {
    return (
      <div className="Trainer">
        <div className="trainer-plan-title-container">
          <span className="trainer-title">
            Personal Trainer Daniel's Plan for you
          </span>
        </div>
        <div className="trainer-plan-container">
          <ul className="plan">
            <li>
              Monday: Yoga (30 minutes) <strong>TODAY</strong>
            </li>
            <li>Wednesday: Upper Body Training (30 minutes)</li>
            <li>Friday: HIIT (30 minutes)</li>
            <li>Saturday: Lower Body Training (30 minutes)</li>
          </ul>
        </div>

        <Link
          className="link"
          to={{
            pathname: "./makeplan",
            state: {
              progress: this.state.progress,
            },
          }}
        >
          <Button variant="contained" className="trainer-no-container">
            Make my own plan
          </Button>
        </Link>

        <Link
          className="link"
          to={{
            pathname: "/video",
            state: {
              progress: this.state.progress,
              video: Database[1][0],
            },
          }}
        >
          <Button variant="contained" className="trainer-yes-container">
            SURE
          </Button>
        </Link>
      </div>
    );
  }
}

export default Trainer;
