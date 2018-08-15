import styled from 'styled-components';

const Style = {
  avatar: styled.div`
    margin-bottom: 20px;
    text-align: center;
  `,
  form: styled.form`
    margin-bottom: 30px;
    text-align: center;
  `,
  h2: styled.h2`
    font-size: 0.8em;
    font-color: orange;
    text-align: center;
  `,
  profile: styled.div`
    margin-top: 20px;
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
    justify-content: space-between;
    list-style: none;
    margin-bottom: 20px;
  `,
  li: styled.li`
    background: lightgray;
    cursor: pointer;
    display: inline-block;
    font-size: 0.775rem;
    margin-right: 3px;
    padding: 4px 16px;
    text-align: center;
    text-transform: uppercase;
    transition: all 400ms ease-in-out;
    &:hover {
      background: skyblue;
    }
    &.active {
      background: pink;
    }
    &:last-of-type {
      margin-right: 0;
    }
  `,
  percentagewrap: styled.div`
    position: relative;
  `,
  percentage: styled.div`
    color: white;
    font-size: 1.6rem;
    left: 50%;
    {/*margin-top: 100px; */}
    position: absolute;
    text-align: center;
    top: 60%;
    transform: translate(-50%, -50%);
  `,
  chartWrapper: styled.div`
  {/*border: 1px solid navy;*/}
    background: thistle;
    position: relative;
    margin: 30px 0;
    max-width: 1200px;
  `,
  subject: styled.span`
    color: gray;
    display: block;
    float: left;
    font-family: Helvetica, sans-serif;
    font-size: 2em;
    text-align: left;
    width: 50%;
  `,
  counts: styled.span`
    color: gray;
    display: block;
    float: left;
    font-family: Helvetica, sans-serif;
    font-size: 2em;
    text-align: right;
    width: 50%;
  `
}


export default Style;
