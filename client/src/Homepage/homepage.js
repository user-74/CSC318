import './homepage.css'
import React from "react";
import {Link} from 'react-router-dom';
import Profile from '../Profile/Profile'
import StartButton from '../StartButton/StartButton'

class Homepage extends React.Component{
    constructor(props){
        super(props)
        if (this.props.location.state === undefined){
            this.state = {
                progress: 0
            }
        }
        else{
            this.state = this.props.location.state
            this.props.history.replace(this.props.location.pathname, this.state);
        }
     
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.location !== prevProps.location && this.props.location.state !== undefined) {
          this.setState(this.props.location.state.curr_state);
        }
    }

    render(){
        return(
            <div className="homepage">
                <div>
                    <Profile progress={this.state.progress}/>
                </div>
                <div>
                    <Link className="link" to={{
                        pathname: this.state.progress === 4? '/homepage' : '/transition',
                        state: {
                            progress: this.state.progress,
                        }
                    }}>
                        <StartButton progress={this.state.progress}/>
                    </Link>
                </div>
                <div>
                    <Link className="link" to={{
                        pathname: '/leaderboard',
                        state: {
                            progress: this.state.progress,
                        }
                    }}>
                        <div className="leaderboard-box">
                            <h5>Friend Activity and LEADERBOARD</h5> 
                            <h6>Jenna just finished Yoga!</h6> 
                            <h6>Jean finished Stretches 15 minuts ago!</h6>
                        </div>
                    </Link>
                </div>
                <div>
                    <Link className="link" to={{
                        pathname: '/progress',
                        state: {
                            progress: this.state.progress,
                        }
                    }}>
                        <div className="progress">
                            <h3>Progress Bar</h3>
                            <progress className="myProgress" value={this.state.progress} max="4" />
                        </div>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Homepage