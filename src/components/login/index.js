import React from 'react';
import Style from './style';
import {connect} from 'react-redux';
import  {loginUser} from '../../actions';

export class Login extends React.Component  {

  constructor(props){
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }
    handleSubmit(e){
      e.preventDefault();
      this.props.dispatch(loginUser(false));
    }

    render(){
      return (
          <Style.form  onSubmit={this.handleSubmit}>
              Username: <input type="text" name="username" value="username" />
              Password: <input type="text" name="password" value="password" />
              <Style.input type="submit" value="submit" />
          </Style.form>
      );
  }
}


// <form className={this.props.type} onSubmit={this.handleSubmit}>
//     <div>
//       <input type="text" ref={input => this.textInput = input} />
//       <button type="submit">{this.props.type === 'item' ? 'Add Item' : 'Create List'}</button>
//     </div>
//   </form>
const mapStateToProps = state => ({
    loggedIn: state.loggedIn
});

export default connect(mapStateToProps)(Login);
