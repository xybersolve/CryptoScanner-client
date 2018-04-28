/*
  Reusable Toggle Button Component
    Properties (with default values):
      * 'className' passed in from consuming component
      * enabled: true,
      * enabledText: 'On',
      * disabledText: 'Off',
      * fireOnToggle: () => {}
*/
import React from 'react';
import PropTypes from 'prop-types';

import classNames from '../utilities/class-names';

class ToggleButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      enabled: props.enabled,
      className: props.className,
    };
  }
  toggle() {
    const enabled = !this.state.enabled;

    this.setState({
      enabled,
      className: classNames({ toggle: true, enabled }),
    }, () => {
      this.props.fireOnToggle(this.state.enabled);
    });
  }

  render() {
    return (
      <button
        className={this.state.className}
        onClick={e => this.toggle(e)}
      >
        {this.props.children && this.props.children}
        {'  '}
        {this.state.enabled ? this.props.enabledText : this.props.disabledText}
      </button>
    );
  }
}

ToggleButton.propTypes = {
  className: PropTypes.string,
  enabled: PropTypes.bool,
  enabledText: PropTypes.string,
  disabledText: PropTypes.string,
  fireOnToggle: PropTypes.func,
};

ToggleButton.defaultProps = {
  className: 'toggle',
  enabled: false,
  enabledText: 'On',
  disabledText: 'Off',
  fireOnToggle: () => {},
};

export default ToggleButton;
