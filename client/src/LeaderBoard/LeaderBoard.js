import './LeaderBoard.css'
import React from "react";
import {Link} from 'react-router-dom';

class LeaderBoard extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            progress: 0
        }
     
    }

    render(){
        return(
            <div className="LeaderBoard">
                This is the LeaderBoard 
                <Link to="/homepage">GO TO HOMEPAGE</Link>
            </div>
        )
    }
}

export default LeaderBoard