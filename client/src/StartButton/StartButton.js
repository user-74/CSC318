import './StartButton.css'
import React from "react";

class StartButton extends React.Component{
    constructor(props){
        super(props)
        if (props.progress === 0){
            this.state = {
                message: "START"
            }
        }
        else if (props.progress === 4){
            this.state = {
                message: "FINISHED"
            }
        }
        else{
            this.state = {
                message: "CONTINUE"
            }
        }
    }


    render(){
        return(
            <div className="StartButton"> 
                <span className="StartButton-text">
                    {this.state.message}
                </span>
            </div>
        )
    }
}

export default StartButton