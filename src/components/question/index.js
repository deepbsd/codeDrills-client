import React from 'react';



export default class Question extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          whatEver: 'whatever'
        }
      }

      render() {
          const varName = '';



          return (
              <div className="question">
                  {varName}
              </div>
          );
      }
  }
