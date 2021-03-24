import './homepage.css'
import React from "react";
import {Link} from 'react-router-dom';
import Profile from '../Profile/Profile'
import StartButton from '../StartButton/StartButton'
import Progress from '../Progress/Progress'

class Homepage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            progress: 0
        }
     
    }

    render(){
        return(
            <div className="homepage">
                <div>
                    <Profile />
                </div>
                <div>
                    <Link to="/video">
                        <StartButton />
                    </Link>
                </div>
                <div>
                    <Link to="/leaderboard">
                        <div className="leaderboard-box">
                            LEADERBOARD
                        </div>
                    </Link>
                </div>
                <div>
                    <Progress />
                </div>
            </div>
        )
    }
}

export default Homepage