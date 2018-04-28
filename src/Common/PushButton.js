import React from 'react';

// import styles from './styles/buttons'
// style={styles.pushButton}
const PushButton = props => (
  <button
    className={props.className}
    onClick={props.callback}
  >
    {props.children && props.children}
    {'  '}
    {props.text && props.text}
  </button>
);

// PushButton.propTypes = {
//   text: PropTypes.string.isRequired,
//   className: PropTypes.string.isRequired,
//   callback: PropTypes.func.isRequired,
// };

// PushButton.defaultProps = {
//   text: 'Push',
//   className: 'PushButton',
//   callback: () => {},
// };

export default PushButton;
