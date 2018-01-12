import React from 'react';
import {connect} from 'react-redux';
import Style from './style';
import Blurb from '../blurb';


export class Landing extends React.Component {
  constructor(props){
    super(props);
  }

  render() {

    const blurbs = this.props.blurbs.map((item, index) => {
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




const mapStateToProps = state => ({
    blurbs: state.blurbs
});

export default connect(mapStateToProps)(Landing);
