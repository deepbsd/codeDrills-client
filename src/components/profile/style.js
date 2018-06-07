import styled from 'styled-components';

const Style = {
  h2: styled.h2`
    font-size: 1.5em;
    font-color: orange;
  `,
  profile: styled.div`
    margin-top: 20px;
    display: inline-flex;
  `,
  img: styled.img`
    height: 400px;
    width: 400px;
  `,
  input: styled.input`
    height: 20px;
    margin-left: 10px;
    margin-bottom: 10px;
    padding: 5px;
    width: 200px;
  `,
  ul: styled.ul`
    display: flex;
    list-style: none;
    justify-content: space-between;
    padding: 0 60px;
  `,
  li: styled.li`
    background: lightgray;
    cursor: pointer;
    display: inline-block;
    font-size: 0.775rem;
    padding: 4px 16px;
    text-transform: uppercase;
    transition: all 400ms ease-in-out;
    &:hover {
      background: skyblue;
    }
    &.active {
      background: pink;
    }
  `,
  percentage: styled.div`
    color: white;
    font-size: 3.0em;
    position: absolute;
    top: 120%;
    left: 51%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 425px;
  `,
  chartWrapper: styled.div`
    position: relative;
    min-width: 500px;
    max-width: 1200px;
  `,
  subject: styled.span`
    color: gray;
    font-family: Helvetica, sans-serif;
    font-size: 2em;
    margin-left: 0;
    margin-right: 20%;
  `,
  counts: styled.span`
    color: gray;
    font-family: Helvetica, sans-serif;
    font-size: 2em;
    margin-left: 20%;
    margin-right: 0;
  `
}


export default Style;
