import React from 'react';
import Style from './style';


import {Route, Switch} from 'react-router-dom';
import Landing from '../landing';
import Register from '../register';
import About from '../about';
import Profile from '../profile';
import Login from '../login';
import Question from '../question';
import Page404 from '../page404';


export default function Main(props) {

    return (

            <Style.wrapper>

              <Switch>
                <Route exact path="/" component={Landing} />
                <Route exact path="/home" component={Landing} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/about" component={About} />
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/startquiz" component={Question} />
                <Route path="*" component={Page404} />  
              </Switch>

            </Style.wrapper>

    );
}


