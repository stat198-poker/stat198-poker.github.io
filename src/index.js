import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

import { DefaultButton } from 'office-ui-fabric-react'

import './index.css';
import 'typeface-roboto'

import Header from './Header.js'
import Landing from './views/Landing/Landing';
import Design from './views/Design/Design'
import Software from './views/Software/Software'
import OnLo from './views/case-studies/onlo/OnLo'

import * as serviceWorker from './serviceWorker';

const routing = (
    <Router>
        <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route path="/design" component={Design} />
            <Route path="/software" component={Software} />
            <Route path="/design/onlo" component={OnLo} />
        </div>
    </Router>
)
ReactDOM.render(routing, document.getElementById('root'))

// ReactDOM.render(<Landing />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();