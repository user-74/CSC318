import "./Profile.css";
import { Box }from '@material-ui/core';
import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: props.progress,
    };
  }

  render() {
    return (
      <Box border={2}>
        <img src={"uoft.jpg"} style={{height: 100, width: 100}} alt="Profile"/><br></br>
        LEVEL 15: {this.state.progress * 20}/100<br></br>
        Monday, March 15<br></br>
        John Doe
      </Box>
    );
  }
}

export default Profile;
