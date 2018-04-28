/*
  Layout

  React driven layouts, such as
    * Horizontal Split (split children horizontally across page)
    * Toolbar


*/
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

// const Toolbar = (props) => {
//   const { children } = this.props;
//   return (
//     <FlexContainer styles={styles.toolBar} className={props.className}>
//       {React.Children.map(children, (child, idx) => (
//         <FlexItem key={idx} child={child} styles={styles.toolItem} />
//       ))}
//     </FlexContainer>
//   );
// };

export default HorizontalSplit;
