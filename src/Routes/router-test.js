/*
  Run some test on the new Router

*/

import React from 'react';
import { render } from 'react-dom';

/*
 use HashRouter when using static router
 otherwise use BrowserRouter
*/
// import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { HashRouter as Router, Route, Redirect, Link } from 'react-router-dom';

const HomePage = ({ match }) => (
  <div>
    <h2>HomePage</h2>
    <p>{match}</p>
  </div>
);

/*
  Route within a Component, instead of main Router definition
    * Detail loads on same page as Dashboard (match.url)
    * hardcode page url, to chage page
*/

const Detail = ({ match }) => <div><h2>Detail</h2><p>{match.params.coin}</p></div>;

const NotFound = () => <div><h2>Page was not found</h2></div>;

const Dashboard = ({ match }) => (
  <div>
    <h2>Dash Board</h2>
    <h4>In page Detail view</h4>
    <ul>
      <li><Link to={`${match.url}/ETH`}>ETH</Link></li>
      <li><Link to={`${match.url}/OMG`}>OMG</Link></li>
    </ul>

    <h4>Switch page to Detail</h4>
    <p>
      Requires Route definition in main Router layout
    </p>
    <ul>
      <li><Link to="/detail/ETH">ETH</Link></li>
      <li><Link to="/detail/OMG">OMG</Link></li>
    </ul>

    <Route
      path={`${match.url}/:coin`}
      component={Detail}
    />

    <Route
      exact
      path={match.url}
      render={() => (<h3>Please select a coin.</h3>)}
    />

  </div>
);

/*
  Main Router
*/
const PrimaryLayout = () => (
  <div className="primary-layout">
    <header>
      React Router 4
    </header>
    <main>
      <Route path="/" exact component={HomePage} />
      <Route path="/dashboard" excact component={Dashboard} />
      <Route path="/detail/:coin" excact component={Detail} />
      <Route path="/not-found" excact component={NotFound} />
      <Redirect to="/not-found" />
    </main>
  </div>
);


const App = () => (
  <Router>
    <PrimaryLayout />
  </Router>
);


render(<App />, document.getElementById('react-container'));

/*
<Router>
  <PrimaryLayout />
</Router>


<Route path="/detail/:coin" excact component={Detail} />

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)


const App = () => {
  const color = 'red'
  return (
    <Route path='/somewhere' render={(props) => (
      <MyComponent {...props} color={color} />
    )} />
  )
}
*/
