import styled from 'styled-components';

const Style = {
  wrapper: styled.div`
        background: #667999;
        color: #a5b6d3;
        flex-shrink: 0;
        font-size: 0.7rem;
        margin-top: 50px;
        margin-bottom: 0;
        text-transform: uppercase;
  `,
  listItem: styled.li`
        display: inline-block;
        font-size: 1.3em;
        padding: 0px;
        position: relative;
        margin-right: 20px;
        text-decoration: none;
        transition: all 0.3s ease-in-out 0s;
        &:hover{
          cursor: pointer;
          color: white;
        }
        &:before {
          background-color: white;
          bottom: -3px;
          content: "";
          height: 2px;
          left: 0;
          position: absolute;
          -webkit-transform: scaleX(0);
          transform: scaleX(0);
          -webkit-transition: all 0.3s ease-in-out 0s;
          transition: all 0.3s ease-in-out 0s;
          visibility: hidden;
          width: 100%;
        }
        &:hover:before {
          visibility: visible;
          -webkit-transform: scaleX(1);
          transform: scaleX(1);
        }
        &:last-of-type {
          margin-right: 0;
        }
  `,
  ulFooter: styled.ul`
    font-size: 10px;
    padding: 20px 5px;
    text-align: center;
  `
}


export default Style;
