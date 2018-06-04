import styled from 'styled-components';

const Style = {
  wrapper: styled.div`
        margin: 16px 0;
        padding: 0 0;
  `,
  listItem: styled.li`
		background: #667999;
        color: white;
        display: inline-block;
        font-size: 1.3em;
        padding: 20px;
        position: fixed;
        margin-right: 20px;
        margin-top: 10px;
        text-decoration: none;
		bottom: 0;
		height: 30px;
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
		  color: white;
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
  ulFooter: styled.ul`
    text-align: center;
  `
}


export default Style;


//  backgroundColor: "purple",
//  fontSize: "20px",
//  color: "white",
//  borderTop: "1px solid #E7E7E7",
//  textAlign: "center",
//  padding: "20px",
//  position: "fixed",
//  left: "0",
//  bottom: "0",
//  height: "60px",
//  width: "100%"
//
//
//  display: "block",
//  padding: "20px",
//  height: "60px",
//  width: "100%"


