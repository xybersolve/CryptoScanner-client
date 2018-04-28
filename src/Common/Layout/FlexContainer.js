import React from 'react';
import styles from './styles';

const FlexContainer = props => (
  <div style={styles.flexContainer} className={props.className}>
    {props.children}
  </div>
);

export default FlexContainer;
