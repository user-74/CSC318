import './VideoPage.css'
import React from "react";
import {Link} from 'react-router-dom';
import ReactPlayer from "react-player"

class VideoPage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            progress: 0
        }
     
    }

    render(){
        return(
            <div>
                <div>
                <ReactPlayer
                    url="https://www.youtube.com/watch?v=5v1wqxnrmrk&ab_channel=PamelaReif"
                    controls
                />
                </div>
                <Link to="/homepage">GO TO HOMEPAGE</Link>
            </div>
        )
    }
}

export default VideoPage