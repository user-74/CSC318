import "./MakePlan.css";
import React from "react";
import Database from "../Database";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

class MakePlan extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: this.props.location.state.progress,
      videos: Database,
    };
  }

  render() {
    return (
      <div className="makePlan">
        <div className="makePlan-plan-title-container">
          <span className="makePlan-title">Choose From Below</span>
        </div>
        <div className="makePlan-plan-container">
          {this.state.videos[1].map(function (video, i) {
            return (
              <Link
                className="link"
                to={{
                  pathname: "/video",
                  state: {
                    progress: this.state.progress,
                    video: video,
                  },
                }}
              >
                <Button
                  variant="contained"
                  className="makePlan-single-plan-container"
                  key={i}
                >
                  <span className="makePlan-text">{video.name}</span>
                </Button>
              </Link>
            );
          }, this)}
        </div>

        <Link
          className="link"
          to={{
            pathname: "/homepage",
            state: {
              progress: this.state.progress,
            },
          }}
        >
          <div className="makePlan-home-container">
            <Button variant="contained">
              <span className="makePlan-text">Home Page</span>
            </Button>
          </div>
        </Link>
      </div>
    );
  }
}

export default MakePlan;
