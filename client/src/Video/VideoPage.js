import './VideoPage.css'
import React from "react";
import {Link} from 'react-router-dom';
import ReactPlayer from "react-player"
import Database from '../Database'

class VideoPage extends React.Component{
    constructor(props){
        super(props)
        if (this.props.location.state.progress === 0){
            this.state = {
                progress: this.props.location.state.progress,
                message: "Dynamic Stretching",
                url: Database[0][0].link
            }
        }
        else if (this.props.location.state.progress === 1){
            this.state = {
                progress: this.props.location.state.progress,
                message: "Light Exercises",
                url: Database[0][1].link
            }
        }
        else if (this.props.location.state.progress === 2){
            this.state = {
                progress: this.props.location.state.progress,
                message: "Let's see what the plan is for today:",
                url: this.props.location.state.link
            }
        }
        else {
            this.state = {
                progress: this.props.location.state.progress,
                message: "Static Stretching",
                url: Database[0][2].link
            }
        }
     
    }

    render(){
        return(
            <div>
                <div>
                    <ReactPlayer
                        url={this.state.url}
                        controls
                    />
                </div>
                <div>
                    <Link className="link" to={{
                        pathname: './homepage',
                        state: {
                            progress: this.state.progress + 1,
                        }
                    }}>
                        Return Home
                    </Link>
                </div>
                <div>
                    <Link className="link" to={{
                        pathname: this.state.progress === 3? './homepage' : './transition',
                        state: {
                            progress: this.state.progress + 1,
                        }
                    }}>
                        Next
                    </Link>
                </div>
            </div>
        )
    }
}

export default VideoPage