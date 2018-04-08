import React from 'react';

import Home from './components/Home.js';
import Signup from './components/Signup.js';
import Details from './components/Details.js';

import {Route, Switch} from 'react-router-dom';

export default (
    <div>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/signup' component={Signup}/>
            <Route path='/details' component={Details} />
        </Switch>
    </div>
)