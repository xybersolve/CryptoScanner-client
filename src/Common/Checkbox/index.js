/*
  Checkbox

  react checkbox, created with icons

  ----------------------------------
  TODO: refactor iconStyles to be sizable from props
  TODO: expose icons as props, for cutomization
*/
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// originally used Material checkbox icon (unneeded weight)
// import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/lib/md';
import styles from './styles';
// ✓ ✔ ︎ ✅ √ ☑️ 🏁 ✓ ✔︎ ✔️ ✓ 𐄂
// const checkmark =  '☑️︎';
const checkmark =  '✔';
const blankspace = '';

const CheckMark = () => <div>{checkmark}</div>;
const BlankSpace = () => <div>{blankspace}</div>;

class CheckBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    /* eslint react/no-did-mount-set-state: 0 */
    const { checked } = this.props;
    this.setState({
      checked,
    });
  }

  handleClick() {
    const checked = !this.state.checked;
    const { name, type } = this.props;
    this.setState({
      checked,
    }, () => {
      // expected .target{} cheat
      this.props.onChange({ target: { name, type, checked } });
    });
  }

  render() {
    const iconStyles = { color: '#ccc', size: '20px' };
    return (
      <div style={styles.container} onClick={this.handleClick}>
        <div style={styles.icon}>
          {this.state.checked ?
            <CheckMark {...iconStyles} /> :
            <BlankSpace {...iconStyles} />
          }
        </div>
        <div style={styles.text}>
          {this.props.labelText}
        </div>
      </div>
    );
  }
}

CheckBox.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  checked: PropTypes.bool,
  labelText: PropTypes.string,
  onChange: PropTypes.func,
};

CheckBox.defaultProps = {
  type: 'checkbox', // internal
  checked: false,
  labelText: '',
  onChange: () => {},
};


export default CheckBox;

/*
<MdCheckBox {...iconStyles} /> :
<MdCheckBoxOutlineBlank {...iconStyles} />
*/
