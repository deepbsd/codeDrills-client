import React from 'react';
import Style from './style';




export default function Blurb(props) {

    return (
      <Style.wrapper>
          {props.title !== null ? <div><h2>{props.title}</h2> <Style.paragraph>{props.blurb}</Style.paragraph></div> : <Style.paragraph>{props.blurb}</Style.paragraph>}
      </Style.wrapper>
    );

}
