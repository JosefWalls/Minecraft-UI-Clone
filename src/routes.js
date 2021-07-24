import React from 'react';
import {Route, Switch} from 'react-router-dom';


import InitialLanding from './Components/InitialLanding/InitialLanding';

import Login from './Components/Authentication/Login';
import Signup from './Components/Authentication/Signup';

import WorldSelection from './Components/WorldSelection/Worlds';

export default (
    <Switch>
        <Route component={InitialLanding} exact path="/"/>
        <Route component={WorldSelection} exact path="/Worlds"/>
        <Route component={Login} exact path="/Login"/>
        <Route component={Signup} exact path="/Signup"/>
    </Switch>
)