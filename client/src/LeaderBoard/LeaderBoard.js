import "./LeaderBoard.css";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

class LeaderBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: this.props.location.state.progress,
      flag: 0,
    };
    this.click = this.click.bind(this);
  }

  click() {
    this.setState({ flag: (this.state.flag + 1) % 2 });
  }

  render() {
    return (
      <div className="LeaderBoard">
        <div className="leaderboard-title-container">
          <span className="leaderboard-title">
            LEADERBOARD{" "}
            <span className="leaderboard-activity-container">
              <Button variant="contained" onClick={this.click}>
                {this.state.flag === 0 ? (
                  <div className="leaderboard-activity">
                    Show Friend Activity
                  </div>
                ) : (
                  <div className="leaderboard-activity">Show Leaderboard</div>
                )}
              </Button>
            </span>
          </span>
        </div>

        <div className="leaderboard-container">
          <div className="row">
            <div className="name">
              <span className="name-text">Jack</span>
            </div>
            <div className="score">
              {this.state.flag === 0 ? (
                <span className="name-text">Level 28</span>
              ) : (
                <span className="activity-text">did Yoga 4 hours ago!</span>
              )}
            </div>
          </div>

          <div className="row">
            <div className="name">
              <span className="name-text">Jenna</span>
            </div>
            <div className="score">
              {this.state.flag === 0 ? (
                <span className="name-text">Level 23</span>
              ) : (
                <span className="activity-text">did Cardio 10 hours ago!</span>
              )}
            </div>
          </div>

          <div className="row">
            <div className="name">
              <span className="name-text">John</span>
            </div>
            <div className="score">
              {this.state.flag === 0 ? (
                <span className="name-text">Level 15</span>
              ) : (
                <span className="activity-text">This is you!</span>
              )}
            </div>
          </div>

          <div className="row">
            <div className="name">
              <span className="name-text">Jean</span>
            </div>
            <div className="score">
              {this.state.flag === 0 ? (
                <span className="name-text">Level 3</span>
              ) : (
                <span className="activity-text">
                  did Lower Body 2 minutes ago!
                </span>
              )}
            </div>
          </div>

          <div className="row">
            <div className="name">
              <span className="name-text">Jason</span>
            </div>
            <div className="score">
              {this.state.flag === 0 ? (
                <span className="name-text">Level 2</span>
              ) : (
                <span className="activity-text">
                  did Stretches 2 hours ago!
                </span>
              )}
            </div>
          </div>
        </div>
        <div className="leaderboard-home-container">
          <Link
            className="link"
            to={{
              pathname: "/homepage",
              state: {
                progress: this.state.progress,
              },
            }}
          >
            <Button variant="contained">
              <div className="leaderboard-home">Back to Homepage</div>
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}

export default LeaderBoard;
