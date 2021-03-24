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
                message: this.props.location.state.video.name,
                url: this.props.location.state.video.link
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
            <div className="videoPage">
                <div className="video-title-container">
                    <span className="video-title">{this.state.message}</span>
                </div>
                <div className="video-container">
                    <ReactPlayer
                        className="video"
                        url={this.state.url}
                        controls
                    />
                </div>
                <Link className="link" to={{
                    pathname: './homepage',
                    state: {
                        progress: this.state.progress + 1,
                    }
                }}>
                    <div className="video-home"><span className="video-text">Return Home</span></div>
                </Link>
                <Link className="link" to={{
                    pathname: this.state.progress === 3? './homepage' : './transition',
                    state: {
                        progress: this.state.progress + 1,
                    }
                }}>
                    <div className="video-next"><span className="video-text">Next</span></div>
                </Link>
            </div>
        )
    }
}

export default VideoPage