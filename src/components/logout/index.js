import React from 'react';

import Style from './style';




export default function Logout() {

    return (
        <Style.wrapper>
            <ul className="logoutList">
                <li className="logoutLi"><a href="/">Logout</a></li>
                <li className="logoutLi"><a href="/profile">Cancel</a></li>
            </ul>
        </Style.wrapper>
    );

}
