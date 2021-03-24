import './StartButton.css'
import React from "react";
import {Link} from 'react-router-dom';

class StartButton extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            progress: 0
        }
     
    }

    render(){
        return(
            <div className="StartButton"> 
                <span className="StartButton-text">
                    START WORKING OUT
                </span>
            </div>
        )
    }
}

export default StartButton