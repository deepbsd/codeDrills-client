import React from 'react';

import Style from './style';

export default function Register() {
    return (
        <Style.form>
            First Name: <input type="text" name="first name" value="first name" />
            Last Name: <input type="text" name="last name" value="last name" />
            Username: <input type="text" name="username" value="username" />
            Password: <input type="text" name="password" value="password" />
            <input type="submit" value="submit" />
        </Style.form>
    );
}
