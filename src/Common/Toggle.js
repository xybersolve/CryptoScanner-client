/*
  Reusable Toggle Component ('div' in lieu of 'button')
    Properties (with default values):
      * 'style' is passed in from consuming container
      * or..
      * 'className' is passed from consuming container

      * enabled: true,
      * enabledText: 'On',
      * disabledText: 'Off',
      * fireOnToggle: () => {}
*/
import React from 'react';
import PropTypes from 'prop-types';

import classNames from '../utilities/class-names';

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      enabled: props.enabled,
      className: props.className,
    };
  }
  componentDidMount() {
    /* eslint react/no-did-mount-set-state: 0 */
    this.setState({
      className: this.props.className,
    });
  }
  getClassName(enabled) {
    return enabled ?
      this.props.enabledClassName :
      this.props.disabledClassName;
  }
  toggle() {
    this.setState({
      enabled: !this.state.enabled,
    }, () => {
      const { enabled } = this.state;
      this.props.fireOnToggle(enabled);
      this.state.className = this.getClassName(enabled);
    });
  }

  render() {
    const { enabled } = this.state;
    const { children, enabledText, disabledText } = this.props;
    return (
      <div className={classNames({ toggle, enabled })}>
        <div
            className={classNames({ toggle, enabled })}
            onClick={e => this.toggle(e)}
        >
          {children && children}
          {'  '}
          {enabled ? enabledText : disabledText}
        </div>
      </div>
    );
  }
}

Toggle.propTypes = {
  className: PropTypes.string,
  enabledClassName: PropTypes.string,
  disabledClassName: PropTypes.string,
  enabled: PropTypes.bool,
  enabledText: PropTypes.string,
  disabledText: PropTypes.string,
  fireOnToggle: PropTypes.func,
};

Toggle.defaultProps = {
  className: 'toggle',
  enabledClassName: '',
  disabledClassName: '',
  enabled: false,
  enabledText: 'On',
  disabledText: 'Off',
  fireOnToggle: () => {},
};

export default Toggle;
