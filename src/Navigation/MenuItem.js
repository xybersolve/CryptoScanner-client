import React from 'react';
import PropTypes from 'prop-types';
// import { HashRouter as Router, Route, Redirect, Link } from 'react-router-dom';
import { Link, match } from 'react-router-dom';

class MenuItem extends React.Component {
  render() {
    return (
      <li className="MenuItem">
        <Link to={`${match.url}/ETH`}>ETH</Link>
      </li>
    );
  }
}

MenuItem.propTypes = {
  active: PropTypes.bool,
};

MenuItem.defaultProps = {
  active: false,
};

export default MenuItem;
