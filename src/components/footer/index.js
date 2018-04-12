import React from 'react';
import Style from './style';



export default function Footer() {

    return (

        <Style.wrapper>
          <Style.ulFooter>
                <Style.listItem><a href="https://github.com/deepbsd">Github</a></Style.listItem>
                <Style.listItem><a href="http://www.dsj.net">Home Page</a></Style.listItem>
                <Style.listItem><a href="http://deepbsd.github.io">Blog</a></Style.listItem>
          </Style.ulFooter>
        </Style.wrapper>

    );

}
