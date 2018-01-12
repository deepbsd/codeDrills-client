import React from 'react';
import Style from './style';




export default function Blurb(props) {

    return (
      <Style.wrapper>
          {props.title !== null ? <div><h2>{props.title}</h2> <p>{props.blurb}</p></div> : <p>{props.blurb}</p>}
      </Style.wrapper>
    );

}
