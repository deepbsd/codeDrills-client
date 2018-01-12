import styled from 'styled-components';
import bannerImg from '../../img/SanFranGGBridge.jpg';

const Style = {
  wrapper: styled.div`
        box-shadow: 4px 15px 5px #607089;
        font-family: "Comic Sans MS", cursive, sans-serif;
        height: 600px;
        color: blue;
        background: white url("${bannerImg}") no-repeat left bottom;
        background-size: 100% auto;
  `,
  head3: styled.div`
        font-size: 23px;
        margin-top: 10px 0;
  `,
  paragraph: styled.p`
        font-size: 18px;
        margin-top: 0;
        padding: 30px;
        text-align: left;
  `
}

export default Style;
