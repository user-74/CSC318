import "./VideoPage.css";
import React from "react";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import Database from "../Database";
import { Button } from "@material-ui/core";

class VideoPage extends React.Component {
  constructor(props) {
    super(props);
    if (this.props.location.state.progress === 0) {
      this.state = {
        progress: this.props.location.state.progress,
        message: "Dynamic Stretching",
        url: Database[0][0].link,
      };
    } else if (this.props.location.state.progress === 1) {
      this.state = {
        progress: this.props.location.state.progress,
        message: "Light Exercises",
        url: Database[0][1].link,
      };
    } else if (this.props.location.state.progress === 2) {
      this.state = {
        progress: this.props.location.state.progress,
        message: this.props.location.state.video.name,
        url: this.props.location.state.video.link,
      };
    } else {
      this.state = {
        progress: this.props.location.state.progress,
        message: "Static Stretching",
        url: Database[0][2].link,
      };
    }
  }

  render() {
    return (
      <div className="videoPage">
        <div className="video-title-container">
          <span className="video-title">{this.state.message}</span>
        </div>
        <div className="video-container">
          <ReactPlayer className="video" url={this.state.url} controls />
        </div>
        <div>
          <Link
            className="link"
            to={{
              pathname: "./homepage",
              state: {
                progress: this.state.progress + 1,
              },
            }}
          >
            <Button className="video-home" variant="contained">
              Return Home
            </Button>
          </Link>
        </div>
        <div>
          <Link
            className="link"
            to={{
              pathname:
                this.state.progress === 3 ? "./homepage" : "./transition",
              state: {
                progress: this.state.progress + 1,
              },
            }}
          >
            <Button className="video-next" variant="contained">
              Next
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}

export default VideoPage;
