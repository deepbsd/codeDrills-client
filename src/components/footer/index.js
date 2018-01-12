import React from 'react';

import './footer.css';
import logo from '../../logo.svg';

export default function Footer() {

    return (

        <div className="footer">
            <ul>
                <li><img src={logo} className="App-logo" alt="logo" /></li>
                <li><a href="https://github.com/deepbsd">Github</a></li>
                <li><a href="http://www.dsj.net">Home Page</a></li>
                <li><a href="http://davidsjackson.net/wordpress/">Blog</a></li>
            </ul>
        </div>

    );

}
