import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import Input from '../register/input';
import {login} from '../../actions/auth';
import {required, nonEmpty} from '../../validators';
import Style from './style';
export class LoginForm extends React.Component {
    onSubmit(values) {
        return this.props.dispatch(login(values.username, values.password));
    }

    render() {
        let error;
        if (this.props.error) {
            error = (
                <Style.error >
                    {this.props.error}
                </Style.error>
            );
        }
        return (
            <Style.form
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                {error}
                  <label>Username</label>
                  <Field
                      component={Input}
                      type="text"
                      name="username"
                      id="username"
                      validate={[required, nonEmpty]}
                  />
                  <label>Password</label>
                  <Field
                      component={Input}
                      type="password"
                      name="password"
                      id="password"
                      validate={[required, nonEmpty]}
                  />
                <Style.buttons disabled={this.props.pristine || this.props.submitting}>
                      Log in
                </Style.buttons>
            </Style.form>
        );
    }
}

export default reduxForm({
    form: 'login',
    onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(LoginForm);
