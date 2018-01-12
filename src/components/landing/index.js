import React from 'react';
import Style from './style';

import logo from '../../logo.svg';



export default function Landing() {
    return (
            <Style.wrapper>
                <Style.head3>Welcome to CodeDrills</Style.head3>
                <Style.paragraph>
                  CodeDrills helps web developers practice for technical interviews.
                  Here you can take quizzes about HTML, CSS, and many aspects of JS
                  to help you prepare for technical interview questions. The
                  interview is your bridge from where you are in your career to
                  where you want to be.
                </Style.paragraph>
            </Style.wrapper>
        );
}
