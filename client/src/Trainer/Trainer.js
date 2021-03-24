import './Trainer.css'
import React from "react";
import Database from '../Database'
import {Link} from 'react-router-dom';

class Trainer extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            progress: this.props.location.state.progress
        }
    }


    render(){
        return(
            <div className="Trainer"> 
                <div className="trainer-plan-title-container">
                    <span className="trainer-title">Personal Trainer Daniel's Plan for you</span>
                </div>
                <div className="trainer-plan-container">
                    <ul className="plan">
                        <li>Monday: Yoga (30 minutes) <strong>TODAY</strong></li>
                        <li>Wednesday: Upper Body Training (30 minutes)</li>
                        <li>Friday: HIIT (30 minutes)</li>
                        <li>Saturday: Lower Body Training (30 minutes)</li>
                    </ul>
                </div>

                <Link className="link" to={{
                    pathname: './makeplan',
                    state: {
                        progress: this.state.progress,
                    }
                }}>
                     <div className="trainer-no-container"><span className="trainer-text">Make my own plan</span></div>
                </Link>

                <Link className="link" to={{
                    pathname: '/video',
                    state: {
                        progress: this.state.progress,
                        video: Database[1][0]
                    }
                }}>
                    <div className="trainer-yes-container"><span className="trainer-text">SURE</span></div>
                </Link>

            </div>
        )
    }
}

export default Trainer