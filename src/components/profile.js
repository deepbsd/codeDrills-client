import React from 'react';
import Footer from './footer';

import './profile.css';


export default function Profile() {

    return (
        <div>
            <div className="profile">
                <img src="http://placekitten.com/g/200/200" alt="" />
                <form>
                    <input type="text" placeholder="username"></input><br/>
                    <input type="text" placeholder="email"></input><br/>
                    <input type="text" placeholder="password"></input>
                </form>
                <div className="profileData">
     
                </div>
            </div>
            <Footer />
        </div>
    );

}