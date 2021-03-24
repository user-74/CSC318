import './Progress.css'
import React from "react";
import {Link} from 'react-router-dom';

class Progress extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            progress: this.props.location.state.progress,
        }
     
    }


    render(){
        return(
            <div className="progress-page">
                <div className="progress-title-container"><span className="progress-title">Progress Report</span></div>
                <div className="progress-bar-container"><progress className="progress-page-bar" value={this.state.progress} max="4" /></div>
                


                <Link className="link" to={{
                    pathname: '/homepage',
                    state: {
                        progress: this.state.progress,
                    }
                }}>
                    <div className="progress-home-container"><span className="progress-home">GO TO HOMEPAGE</span></div>
                </Link>
            </div>
        )
    }
}

export default Progress