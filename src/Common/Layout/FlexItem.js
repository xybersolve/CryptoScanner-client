import React from 'react';

// import styles from './styles';

const FlexItem = props => (
  <div key={props.idx} style={props.styles}>
    {props.child}
  </div>
);

export default FlexItem;
