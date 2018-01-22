import React from 'react';
import Style from './style';




export default function Blurb(props) {

    return (
      <Style.wrapper>
          {props.title !== null ? <div><Style.head3>{props.title}</Style.head3> <Style.paragraph>{props.blurb}</Style.paragraph></div>
          : <Style.paragraph>{props.blurb}</Style.paragraph>}
      </Style.wrapper>
    );

}
