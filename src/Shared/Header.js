import React from 'react';
import PropTypes from 'prop-types';

// import styles from './styles/header';

const Header = ({ title, pageTitle }) => (
  <header className="Header">
    <div className="title">
      {title}
    </div>
    <div className="pageTitle">
      {pageTitle}
    </div>
  </header>
);

Header.propTypes = {
  title: PropTypes.string,
  pageTitle: PropTypes.string,
};

// default negates need for isRequired
Header.defaultProps = {
  title: 'CryptoScanner',
  pageTitle: 'Heatseeker',
};

export default Header;
