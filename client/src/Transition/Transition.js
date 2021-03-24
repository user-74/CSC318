import './Transition.css'
import React from "react";
import {Link} from 'react-router-dom';

class Transition extends React.Component{

    constructor(props){
        super(props);
        if (this.props.location.state.progress === 0){
            this.state = {
                progress: this.props.location.state.progress,
                message: "Let's do some Dynamic Stretching"
            }
        }
        else if (this.props.location.state.progress === 1){
            this.state = {
                progress: this.props.location.state.progress,
                message: "Let's do some Light Exercises"
            }
        }
        else if (this.props.location.state.progress === 2){
            this.state = {
                progress: this.props.location.state.progress,
                message: "Let's see what the plan is for today:"
            }
        }
        else {
            this.state = {
                progress: this.props.location.state.progress,
                message: "Lets finish up with some Static Stretching"
            }
        }

    }


    render(){
        return(
            <div className="Transition"> 
                <div>
                    {this.state.message}
                </div>
                <div>
                    <Link className="link" to={{
                        pathname: './homepage',
                        state: {
                            progress: this.state.progress,
                        }
                    }}>
                        Maybe Later (Return to Home)
                    </Link>
                </div>
                <div>
                    <Link className="link" to={{
                        pathname: this.state.progress === 2? "./trainer" : './video',
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

export default Transition