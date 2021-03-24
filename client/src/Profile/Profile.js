import './Profile.css'
import React from "react";

class Profile extends React.Component{

    render(){
        return(
            <div className="Profile">
                Picture
                <h4>LEVEL 15: 0/100</h4>
                <h4>Monday, March 15</h4>
                <h2>John Doe</h2>
            </div>
        )
    }
}

export default Profile