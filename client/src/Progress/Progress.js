import './Progress.css'
import React from "react";
import {Link} from 'react-router-dom';

class Progress extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            progress: 0
        }
     
    }

    render(){
        return(
            <div className="progress">
                This is the Progress Bar
            </div>
        )
    }
}

export default Progress