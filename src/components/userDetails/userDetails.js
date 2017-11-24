import React from 'react';


export default function Userdetails(props) {

    return (

        <div className="profile">
            <img src="http://placekitten.com/g/200/200" alt="" />
            <form>
                <input type="text" placeholder="username" value={props.user.username}></input><br/>
                <input type="text" placeholder="email" value={props.user.email}></input><br/>
                <input type="text" placeholder="password" value={props.user.password}></input>
            </form>
            <div className="profileData">
 
            </div>
        </div>

    );

}
