import React from 'react';

// import '../profile/profile.css';
import Style from '../profile/style.js';

export default function Userdetails(props) {

    return (

        <Style.profile className="profile">
            <Style.img src="http://placekitten.com/g/400/400" alt="userKitty" />
            <form>
                <Style.input type="text" placeholder="username" defaultValue={props.user.username}></Style.input><br/>
                <Style.input type="text" placeholder="email" defaultValue={props.user.email}></Style.input><br/>
                <Style.input type="text" placeholder="password" defaultValue={props.user.password}></Style.input>
            </form>
            <div className="profileData">

            </div>
        </Style.profile>

    );

}
