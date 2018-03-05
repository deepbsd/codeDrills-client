import React from 'react';

// import '../profile/profile.css';
import Style from '../profile/style.js';

export default function Userdetails(props) {

    return (

        <Style.profile className="profile">
            <Style.img src="http://placekitten.com/g/400/400" alt="userKitty" />
            <form>
                <Style.input type="text" placeholder="first name" defaultValue={props.user.firstName}></Style.input><br/>
                <Style.input type="text" placeholder="last name" defaultValue={props.user.lastName}></Style.input><br/>
                <Style.input type="text" placeholder="username" defaultValue={props.user.username}></Style.input>
            </form>
        </Style.profile>

    );

}
//  <Style.input type="text" placeholder="email" defaultValue={props.user.email}></Style.input><br/>
