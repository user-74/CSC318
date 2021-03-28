import "./homepage.css";
import React from "react";
import { Link } from "react-router-dom";
import Profile from "../Profile/Profile";
import StartButton from "../StartButton/StartButton";
import { Box, Button } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    if (this.props.location.state === undefined) {
      this.state = {
        progress: 0,
      };
    } else {
      this.state = this.props.location.state;
      this.props.history.replace(this.props.location.pathname, this.state);
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (
      this.props.location !== prevProps.location &&
      this.props.location.state !== undefined
    ) {
      this.setState(this.props.location.state.curr_state);
    }
  }

  render() {
    return (
      <Box component="div" className="homepage">
        <CssBaseline />

        <Profile progress={this.state.progress} />
        <div>
          <Link
            className="link"
            to={{
              pathname: this.state.progress === 4 ? "/homepage" : "/transition",
              state: {
                progress: this.state.progress,
              },
            }}
          >
            <StartButton progress={this.state.progress} />
          </Link>
        </div>
        <Link
          className="link"
          to={{
            pathname: "/leaderboard",
            state: {
              progress: this.state.progress,
            },
          }}
        >
          <Button variant="contained">
            <Box style={{ fontSize: 18 }}>
              <h1>Friend Activity and LEADERBOARD</h1>
              Jenna just finished Yoga! <br />
              Jean finished Stretches 15 minutes ago!
            </Box>
          </Button>
        </Link>

        <Link
          className="link"
          to={{
            pathname: "/progress",
            state: {
              progress: this.state.progress,
            },
          }}
        >
          <h1>Today's Exercise Progress: {this.state.progress * 25} %</h1>
          <Button variant="outlined" className="progress">
            <progress
              className="myProgress"
              value={this.state.progress}
              max="4"
            />
          </Button>
        </Link>
      </Box>
    );
  }
}

export default Homepage;
