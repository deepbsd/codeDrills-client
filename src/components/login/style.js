import styled from 'styled-components';

const Style = {
  buttons: styled.button`
       background-color: #e7e7e7;
       border: none;
       border-radius: 8px;
       color: black;
       font-size: 16px;
       margin: 15px 15px;
       padding: 15px 32px;
  `,
  div: styled.div`
    text-align: center;
  `,
  error: styled.div`
        color: red;
  `,
  form: styled.form`
        width: 100%;
        margin: 0 auto;
  `,
  label: styled.label`
     margin: 10px auto;
  `                
}


export default Style;
