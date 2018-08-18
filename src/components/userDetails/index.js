import React from 'react';

// import '../profile/profile.css';
import Style from '../profile/style.js';
import Avatar from 'react-avatar';

export default function Userdetails(props) {

    //const thing = props;
    //console.log("PROPS: ",thing);
    return (

        <Style.profile className="profile">

        {/* "<Avatar email="deepbsd@yahoo.com" twitterHandle="deepbsd"  size="400 "round={true} /> " */}
        {/*<Avatar googleId="112172751555880110389" twitterHandle="deepbsd"  size="350"round={false} /> */}
            <Style.avatar>
                <Avatar email={props.user.email} round={true} />
            </Style.avatar>
            <Style.div>
                <Style.cthruinput><Style.span>Firstname:</Style.span>{props.user.firstName}</Style.cthruinput>
                <Style.cthruinput><Style.span>Lastname:</Style.span>{props.user.lastName}</Style.cthruinput>
                <Style.cthruinput><Style.span>Username:</Style.span>{props.user.username}</Style.cthruinput>
                <Style.cthruinput><Style.span>Email:</Style.span>{props.user.email}</Style.cthruinput>
            </Style.div>
        </Style.profile>

    );

}


//  <Style.img src="http://placekitten.com/g/400/400" alt="userKitty" />
//  <Style.input type="text" placeholder="email" defaultValue={props.user.email}></Style.input><br/>
