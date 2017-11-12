import React from 'react';

import './login.css';

export default function login() {
    return (
        <form className="login">
            Username: <input type="text" name="username" value="username" />
            Password: <input type="text" name="password" value="password" />
            <input type="submit" value="submit" />
        </form>
    );
}
