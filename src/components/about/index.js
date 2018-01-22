import React from 'react';
import {Style, Img} from './style';



export default function About() {

    return (

        <Style.wrapper>
            <h2>About the Author</h2>
            <Img src="https://avatars0.githubusercontent.com/u/10392722?s=460&v=4"
              alt="This is Dave"  />
            <Style.paragraph>
                Dave is a web fullstack web developer who lives in Marietta, GA.
            </Style.paragraph>
        </Style.wrapper>
    );

}
