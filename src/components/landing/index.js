import React from 'react';

import Style from './style';
import Blurb from '../blurb';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

export class Landing extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      blurbs: [
        {
          title: null,
          blurb: `CodeDrills helps web developers practice for technical interviews.
                  Here you can take quizzes about HTML, CSS, and many aspects of JS
                  to help you prepare for technical interview questions. The
                  interview is your bridge from where you are in your career to
                  where you want to be.`
        },
        {
          title: 'Try Out the App',
          blurb: `Log in as 'guest' with password 'password99'.  You'll see some charts that show historical data for 
                  for your past quizzes.  You can click on 'Category Stats' to see charts for
                  each category, 'Aggregate Stats' to see your overall quiz performance, and
                  'Latest Stats' to compare your latest quiz against historical performance.
                  Click 'Start Quiz' to take a quiz and see how the data updates.  When you're done trying out the app, 
                  click 'logout'.`
        },
        {
          title: 'Track Progress in Categories of Coding',
          blurb: `There are 40 questions currently, and they cover HTML, CSS, Vanilla JS,
                  Node.js, API's and MongoDB. Each quiz is 10 questions, and your Progress
                  in each category is recorded and displayed in various types of graphs.`
        },
        {
          title: 'See Your Progress Visually with Chart.js',
          blurb: `Chart.js includes support for many different types of graphs, but currently
                  your progress in each category mentioned above is displayed with a pie chart,
                  a radar chart, and a polar chart.  Your latest quiz performance is displayed as a
                  comparison with your historical performance in a radar chart.`
        },
        {
          title: 'Full Stack Web Dev Emphasis',
          blurb: `Today's full stack web developer must be fluent in a host of technologies. These
                  quizzes will focus on the MERN stack (MongoDB, Express.js, React.js, and Node.js).
                  Additionally, questions about API's and non-relational databases in general will
                  be asked.`
        },
        {
          title: 'Future Ideas',
          blurb: `Since this is an early release, it includes a very basic set of functionality.
                  In future releases, I expect that users will be able to add their own questions,
                  will be able to talk in a forum with other developers, and will be able to log in
                  using their Github or Stack Overflow accounts.`
        }
      ]
    }
  }

  render() {

    if (this.props.loggedIn) {
      return <Redirect to="/profile" />;
    }

    const blurbs = this.state.blurbs.map((item, index) => {
      return (
        <Blurb key={index} {...item} />
      )
    })

    return (
            <div>
              <Style.banner>
                <Style.background />
                <Style.head3>CodeDrills</Style.head3>

              </Style.banner>
              {blurbs}
            </div>
        );
      }
}


const mapStateToProps = state => {
  const whatever = state;
  //console.log("HOME: --reducer: ", whatever);
  return {
    loggedIn: state.loggedIn
  }
};

export default connect(mapStateToProps)(Landing);
