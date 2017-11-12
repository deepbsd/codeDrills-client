import React from 'react';

import './register.css';

export default function register() {
    return (
        <form className="register">
            First Name: <input type="text" name="first name" value="first name" />
            Last Name: <input type="text" name="last name" value="last name" />
            Username: <input type="text" name="username" value="username" />
            Password: <input type="text" name="password" value="password" />
            <input type="submit" value="submit" />
        </form>
    );
}
