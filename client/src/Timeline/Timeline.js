import './Timeline.css'
import React from "react";

class Timeline extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        progress: props.progress
    }
  }

  render() {
    return (
        <div>
            <h1>{this.state.progress *25} % </h1>
            <div className="timeline-container">
                <progress
                    className="timeline"
                    value={this.state.progress}
                    max="4"
                />
            </div>
        </div>
    );
  }
}

export default Timeline;
