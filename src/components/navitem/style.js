import styled from 'styled-components';

const Style = {
  navItem: styled.li`
        color: #667999;
        display: inline-block;
        font-size: 1.1rem;
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
        &:last-of-type {
          margin-right: 0;
        }
  `
}


export default Style;
