import React from 'react';
import {Route, Switch} from 'react-router-dom';


import InitialLanding from './Components/InitialLanding/InitialLanding';

export default (
    <Switch>
        <Route component={InitialLanding} exact path="/"/>
    </Switch>
)