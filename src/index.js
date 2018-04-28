import React from 'react';
import { render } from 'react-dom';
import WebFont from 'webfontloader';

import './../css/bootstrap.css';
import './../sass/style.scss';

import Root from './Routes/Root';


WebFont.load({
  google: {
    families: ['Titillium Web:300,400,700', 'sans-serif'],
  },
});

render(
  <Root />,
  document.getElementById('react-container'),
);
