import React from 'react';

import FlexContainer from './FlexContainer';
import FlexItem from './FlexItem';

import styles from './styles';

const HorizontalSplit = (props) => {
  const { children } = props;
  return (
    <FlexContainer styles={styles.horizontalContainer}>
      {React.Children.map(children, (child, idx) => (
        <FlexItem key={idx} child={child} styles={styles.flexItem} />
      ))}
    </FlexContainer>
  );
};

export default HorizontalSplit;
