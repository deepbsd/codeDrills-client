import React from 'react';

import './question.css';


export default function MultipleChoice(props) {



return (
      <div>
        {props.question}
      </div>
  )



}




    // return (
    //   <div>
    //     <ol>
    //     <li>{props.questions[1].question}</li>
    //       <ol>
    //         <li>{props.questions[1].answers[0].answerText}</li>
    //         <li>{props.questions[1].answers[1].answerText}</li>
    //         <li>{props.questions[1].answers[2].answerText}</li>
    //         <li>{props.questions[1].answers[3].answerText}</li>
    //         <li>{props.questions[1].answers[4].answerText}</li>
    //       </ol>
    //     </ol>
    //   </div>
    // );
