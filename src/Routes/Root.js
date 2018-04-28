/*
  Root.js

  Routes for entire spp
*/

import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
//import { BrowserRouter as Router, Route } from 'react-router-dom';

import HotCoins from '../HotCoins';
// import NotFound from './NotFound';
import Flex from '../WorkBench/Flex';
import Layout from '../WorkBench/Layout';

const Root = () => (
  <Router>
    <div>
      <Route exact path="/hotcoins" component={HotCoins} />
      <Route exact path="/flex" component={Flex} />
      <Route exact path="/layout" component={Layout} />
    </div>
  </Router>
);

export default Root;

/*
<Route exact path="/horizontal" component={Test} />

<Route exact path="/dashboard" component={DashBoard} />
<Route exact path="/not-found" component={NotFound} />
<Redirect to="/not-found" />
<Route exact path='/' component={App} />
*/
