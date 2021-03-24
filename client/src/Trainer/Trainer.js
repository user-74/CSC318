import './Trainer.css'
import React from "react";
import Database from '../Database'
import {Link} from 'react-router-dom';

class Trainer extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            progress: this.props.location.state.progress,
            videos: Database
        }
    }


    render(){
        return(
            <div className="Trainer"> 
                <div className="trainer-plan">
                    trainer plan
                </div>
                <div>
                    <Link className="link" to={{
                        pathname: './makeplan',
                        state: {
                            progress: this.state.progress,
                        }
                    }}>
                        Make my own plan
                    </Link>
                </div>
                <div>
                    <Link className="link" to={{
                        pathname: '/video',
                        state: {
                            progress: this.state.progress,
                        }
                    }}>
                        SURE
                    </Link>
                </div>
            </div>
        )
    }
}

export default Trainer