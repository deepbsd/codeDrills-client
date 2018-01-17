import React from 'react';
import Style from './style';



export default function Login() {
    return (
        <Style.wrapper>
            Username: <input type="text" name="username" value="username" />
            Password: <input type="text" name="password" value="password" />
            <Style.input type="submit" value="submit" />
        </Style.wrapper>
    );
}
