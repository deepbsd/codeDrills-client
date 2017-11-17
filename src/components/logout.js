import React from 'react';


import './logout.css';


export default function Logout() {

    return (
        <div className="logout">
            <ul className="logoutList">
                <li className="logoutLi"><a href="/">Logout</a></li>
                <li className="logoutLi"><a href="/profile">Cancel</a></li>
            </ul>
        </div>
    );

}

