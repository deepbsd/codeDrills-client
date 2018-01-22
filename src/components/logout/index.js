import React from 'react';

import Style from './style';




export default function Logout() {

    return (
        <Style.wrapper>
            <ul>
                <li><a href="/">Logout</a></li>
                <li><a href="/profile">Cancel</a></li>
            </ul>
        </Style.wrapper>
    );

}
