import React from 'react';
import {connect} from 'react-redux';

import Answer from './answer';





import './question.css';

export class Question extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
      const questions = this.props.questions.map((question, index1) => {
        let answers = question.answers.map((answer, index2) => {
            return (
              <Answer assetUrl={question.assetUrl} type={question.type}
                key={index2} {...answer} />
            )
          });

        return (
              <ul className="question">
                <li><span class="questionText" key={index1}>{question.number}. {question.question}</span></li>
                {question.type === 'videoSnippet' ?
                  <iframe width="560" height="315" src={question.assetUrl}
                    title="videoSnippet" frameborder="0" allowfullscreen>
                  </iframe> : question.type === 'image' ?
                  <img src={question.assetUrl} alt="alt text" /> : null }
                {answers}
              </ul>
        )
    });

      return (
            <div class="questionWrap">
              {questions}
            </div>
      );

  }
}


const mapStateToProps = state => ({
    questions: state.questions
});

export default connect(mapStateToProps)(Question);
