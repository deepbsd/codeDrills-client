import React from 'react';

import './profile.css';


export default function Profile() {

    return (

        <div className="profile">
            <img src="#" />
            <form>
                <input type="text" placeholder="username"></input><br/>
                <input type="text" placeholder="email"></input><br/>
                <input type="text" placeholder="password"></input>
            </form>
            <div className="profileData">
 
            </div>
        </div>
    
    );

}