import styled from 'styled-components';
import bannerImg from '../../img/SanFranGGBridge.jpg';

const Style = {
  banner: styled.div`
        height: 600px;
        position: relative;
  `,
  background: styled.div`
        font-family: "Comic Sans MS", cursive, sans-serif;
        height: 100%;
        left: 0;
        color: blue;
        background: white url("${bannerImg}") no-repeat center center;
        background-size: cover;
        position: absolute;
        top: 0;
        width: 100%;
        z-index: -1;
  `,
  head3: styled.div`
        color: #667999;
        display: inline-block;
        font-size: 64px;
        position: absolute;
        right: 10%;
        top: 20%;
        transform: translateY(-10%);
  `,
  paragraph: styled.p`
        font-size: 18px;
        margin-top: 0;
        padding: 30px;
        text-align: left;
  `
}

export default Style;
