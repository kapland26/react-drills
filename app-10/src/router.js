import React from 'react'
import {Route, Switch} from 'react-router-dom';

import Product from './component/Product.js';
import Details from './component/Details.js';

export default (
    <div>
        <Switch>
            <Route exact path='/' component={Product} />
            <Route path='/details/:id' component={Details} />
        </Switch>
    </div>
)
