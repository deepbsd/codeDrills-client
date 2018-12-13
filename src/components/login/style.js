import styled from 'styled-components';

const Style = {
  buttons: styled.button`
       background-color: #e7e7e7;
       border: none;
       color: black;
       font-size: 16px;
       margin: 15px auto;
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
  `,                
  span: styled.span`
     visibility: hidden;
     background-color: black;
     color: white;
     text-align: left;
     padding: 4px 2px;
     border-radius: 4px;
  `

}


export default Style;
