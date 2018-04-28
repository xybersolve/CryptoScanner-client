import React from 'react';

// import FlexContainer from './FlexContainer'
// import FlexItem from './FlexItem'
import HorizontalSplit from './index';

const style = {
  color: 'white',
  fontSize: '18px',
};


const Test = () => (
  <HorizontalSplit>
    <div style={style}>Left Side</div>
    <div style={style}>Middle</div>
    <div style={style}>Right Side</div>
  </HorizontalSplit>
);

export default Test;
