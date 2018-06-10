import styled from 'styled-components';

const Style = {
  wrapper: styled.div`
    margin-top: 30px;
  `,
  paragraph: styled.p`
        font-size: 18px;
        margin-top: 0;
        text-align: left;
  `,
  head3: styled.div`
        color: #42587c;
        font-family: 'Source Sans Pro', sans-serif;
        font-size: 28px;
        margin: 40px 0 8px;
        padding-left: 22px;
        position: relative;
        &:after {
          background: crimson;
          content: '';
          height: 10px;
          left: 0;
          position: absolute;
          top: 4px;
          width: 10px
        }
    `,

}

export default Style;
