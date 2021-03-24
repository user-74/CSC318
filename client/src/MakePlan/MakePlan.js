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
            <div className="MakePlan"> 
                Make my own Plan Page
            </div>
        )
    }
}

export default MakePlan