import "./StartButton.css";
import React from "react";
import { Button } from "@material-ui/core";

class StartButton extends React.Component {
  constructor(props) {
    super(props);
    if (props.progress === 0) {
      this.state = {
        message: "START",
      };
    } else if (props.progress === 4) {
      this.state = {
        message: "FINISHED",
      };
    } else {
      this.state = {
        message: "CONTINUE",
      };
    }
  }

  render() {
    return (
      <Button variant="contained" className="StartButton">
        <div className="StartButton-text">{this.state.message}</div>
      </Button>
    );
  }
}

export default StartButton;
