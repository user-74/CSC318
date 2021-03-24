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
                    url="https://www.youtube.com/watch?v=ug50zmP9I7s"
                />
                </div>
                <Link to="/homepage">GO TO HOMEPAGE</Link>
            </div>
        )
    }
}

export default VideoPage