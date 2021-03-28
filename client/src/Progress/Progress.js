import "./Progress.css";
import React from "react";
import { Link } from "react-router-dom";
import { Box, Button } from "@material-ui/core";

class Progress extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: this.props.location.state.progress,
    };
  }

  render() {
    return (
      <div className="progress-page">
        <div className="progress-title-container">
          <span className="progress-title">Progress Report</span>
        </div>
        <span className="progress-header">
          <h1>
            Daily Exercise Progress Complete: {this.state.progress * 25} %
          </h1>
        </span>
        <Box>
          {this.state.progress >= 1 && (
            <div className="exercise">Dynamic Stretching complete!</div>
          )}
          {this.state.progress >= 2 && (
            <div className="exercise">Light Exercise complete!</div>
          )}
          {this.state.progress >= 3 && (
            <div className="exercise">Main Exercise complete!</div>
          )}
          {this.state.progress >= 4 && (
            <div className="exercise">Static Stretching complete!</div>
          )}
        </Box>
        <div className="progress-bar-container">
          <progress
            className="myProgress"
            value={this.state.progress}
            max="4"
          />
        </div>
        <div className="progress-home-container">
          <Link
            className="link"
            to={{
              pathname: "/homepage",
              state: {
                progress: this.state.progress,
              },
            }}
          >
            <Button variant="contained">Return Home</Button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Progress;
