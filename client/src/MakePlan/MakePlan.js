import './MakePlan.css'
import React from "react";
import Database from '../Database'
import {Link} from 'react-router-dom';

class MakePlan extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            progress: this.props.location.state.progress,
            videos: Database
        }
    }

    render(){
        return(
            <div className="makePlan"> 
                <div className="makePlan-plan-title-container">
                    <span className="makePlan-title">Choose From Below</span>
                </div>

                <div className="makePlan-plan-container">
                    {this.state.videos[1].map(function(video, i){
                        return (
                            <Link className="link" to={{
                                pathname: '/video',
                                state: {
                                    progress: this.state.progress,
                                    video: video
                                }
                            }}>
                                <div className="makePlan-single-plan-container" key={i}><span className="makePlan-text">{video.name}</span></div>
                            </Link>
                        )
                    }, this)}
                </div>

                <Link className="link" to={{
                    pathname: '/trainer',
                    state: {
                        progress: this.state.progress,
                    }
                }}>
                     <div className="makePlan-back-container"><span className="makePlan-text">Back</span></div>
                </Link>

                <Link className="link" to={{
                    pathname: '/homepage',
                    state: {
                        progress: this.state.progress,
                    }
                }}>
                    <div className="makePlan-home-container"><span className="makePlan-text">Home Page</span></div>
                </Link>

            </div>
        )
    }
}

export default MakePlan