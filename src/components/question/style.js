import styled from 'styled-components';

const Style = {
  navItem: styled.li`
        color: #667999;
        display: inline-block;
        font-size: 18px;
        padding: 0px;
        position: relative;
        margin-right: 20px;
        margin-top: 10px;
        text-decoration: none;
        &:hover{
          cursor: pointer;
          color: #6E3034;
        }
        &:before {
          content: "";
          position: absolute;
          width: 100%;
          height: 2px;
          bottom: 0;
          left: 0;
          background-color: #6E3034;
          visibility: hidden;
          -webkit-transform: scaleX(0);
          transform: scaleX(0);
          -webkit-transition: all 0.3s ease-in-out 0s;
          transition: all 0.3s ease-in-out 0s;
        }
        &:hover:before {
          visibility: visible;
          -webkit-transform: scaleX(1);
          transform: scaleX(1);
        }
        `,
    questionText: styled.span`
      font-size: 1.2em;
      font-weight: bolder;
      color: black;
      margin: 30px 0;
    `,
    question: styled.li`
      color: black;
      display: flex;
      text-align: left;
      &:hover {
        color: black;
        font-weight: normal;
        font-size: 1em;
        font-style: normal;
      }
    `,
    answerLi: styled.li`
      margin: 15px 5px;
      &:hover {
        cursor: pointer;
        background-color: #8af2d4;
      }
    `,
    vidWrap: styled.div`
      position: relative;
      width: 500px;
      height: 300px;
    `,
    vidFrame: styled.iframe`
     position: absolute;
     top: 0;
     left: 0;
     width: 100%;
     height: 100%;
    `,
     imgWrap: styled.div`
      margin: 0;
      position: relative;
      width: 500px;
      height: 200px;
    `,
    imgFrame: styled.div`
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    `,
    imgSelf: styled.img`
      position: relative;
      height: 100%;
      width: auto;
    `
}


export default Style;
