import React from 'react';

import FlexContainer from './FlexContainer';
import FlexItem from './FlexItem';

import styles from './styles';

const VerticalPanes = (props) => {
  const { children } = props;
  return (
    <FlexContainer styles={styles.verticalPanes}>
      {React.Children.map(children, (child, idx) => (
        <FlexItem key={idx} child={child} styles={styles.flexItem} />
      ))}
    </FlexContainer>
  );
};

export default VerticalPanes;
