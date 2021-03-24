import './homepage.css'
import React from "react";
import {Link} from 'react-router-dom';
import Profile from '../Profile/Profile'
import StartButton from '../StartButton/StartButton'
import Progress from '../Progress/Progress'

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