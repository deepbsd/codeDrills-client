import React from 'react';

// import '../profile/profile.css';
import Style from '../profile/profile.js';

export default function Userdetails(props) {

    return (

        <Style.profile className="profile">
            <Style.img src="http://placekitten.com/g/400/400" alt="userKitty" />
            <form>
                <Style.input type="text" placeholder="username" value={props.user.username}></Style.input><br/>
                <Style.input type="text" placeholder="email" value={props.user.email}></Style.input><br/>
                <Style.input type="text" placeholder="password" value={props.user.password}></Style.input>
            </form>
            <div className="profileData">

            </div>
        </Style.profile>

    );

}
