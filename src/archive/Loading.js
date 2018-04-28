import React from 'react';
import Loader from 'react-loader-spinner';

import { rando } from '../helpers';
// if no spinner specified - randomly select
const spinners = [
  'TailSpin',
  'Rings',
  'Puff',
  'Oval',
  'Bars',
  'ThreeDots',
  'Ball-Triangle',
  'Circles',
];
const getSpinner = () => rando(spinners);
const defaultSpinner = getSpinner();

const containerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '36px',
  color: '#cccccc',
};

const childStyle = {
  margin: '100px 10px',
};

// show default spinner for our own edification
const spinnerMsg = {
  color: '#666666',
  fontSize: '12px',
};

const Loading = (props) => {
  const {
    spinner,
    color = '#cccccc',
    size = '50',
    text = 'Loading',
  } = props;

  return (
    <div style={containerStyle}>
      <div style={childStyle}>
        {text} {spinner || <span style={spinnerMsg}>{defaultSpinner}</span>}
      </div>
      <div style={childStyle}>
        <Loader
          type={spinner || defaultSpinner}
          color={color}
          height={size}
          width={size}
        />
      </div>
    </div>
  );
};

export default Loading;
