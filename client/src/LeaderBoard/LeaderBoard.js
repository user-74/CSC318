import './LeaderBoard.css'
import React from "react";
import {Link} from 'react-router-dom';

class LeaderBoard extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            progress: this.props.location.state.progress,
        }
     
    }

    render(){
        return(
            <div className="LeaderBoard">
                <div className="leaderboard-title-container"><span className="leaderboard-title">LEADERBOARD</span></div>


                <div className="leaderboard-container">
                    <div className="row">
                        <div className="name"><span className="name-text">Jack</span></div><div className="score"><span className="name-text">Level 28</span></div>
                    </div>

                    <div className="row">
                        <div className="name"><span className="name-text">Jenna</span></div><div className="score"><span className="name-text">Level 25</span></div>
                    </div>

                    <div className="row">
                        <div className="name"><span className="name-text">John</span></div><div className="score"><span className="name-text">Level 15</span></div>
                    </div>

                    <div className="row">
                        <div className="name"><span className="name-text">Jean</span></div><div className="score"><span className="name-text">Level 3</span></div>
                    </div>

                    <div className="row">
                        <div className="name"><span className="name-text">Jason</span></div><div className="score"><span className="name-text">Level 2</span></div>
                    </div>
                </div>

                <Link className="link" to={{
                    pathname: '/homepage',
                    state: {
                        progress: this.state.progress,
                    }
                }}>
                    <div className="leaderboard-home-container"><span className="leaderboard-home">GO TO HOMEPAGE</span></div>
                </Link>
            </div>
        )
    }
}

export default LeaderBoard