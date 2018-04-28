/*
  Loading.js

  Wraps api calls
    * displays loading animation or Component via "render props"
    * endPoint: function or string (url)

  Dependencies:
    react-loader-spinner

*/
import React from 'react';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';

import { rando } from '../helpers';
// if no spinner specified - randomly select
const spinners = [
  'ThreeDots',
  'TailSpin',
  'Rings',
  'Puff',
  'Oval',
  'Bars',
  'ThreeDots',
  'Ball-Triangle',
  'Circles',
];
const getSpinner = () => rando(spinners);
const defaultSpinner = getSpinner();

const containerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '36px',
  color: '#cccccc',
};

const childStyle = {
  margin: '100px 10px',
};

// show default spinner for our own edification
const spinnerMsg = {
  color: '#666666',
  fontSize: '12px',
};

class Loading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  componentWillReceiveProps(nextProps) {
    const { trigger } = this.props;
    // console.log('Loader->componentWillReceiveProps()');
    // console.log(`nextProps.trigger: ${nextProps.trigger}, trigger: ${trigger}`);
    if (nextProps.trigger !== trigger) {
      this.fetchData();
    }
  }

  fetchData() {
    // by pass for development
    if (this.props.byPass) return;

    this.setState({ isLoading: true });
    const { endPoint } = this.props;
    const func = typeof endPoint === 'string' ?
      fetch(this.props.endPoint) :
      this.props.endPoint;

    func().then((data) => {
      this.setState({
        isLoading: false,
        data,
      });
    });
  }

  renderLoading() {
    const {
      spinner = 'Oval',
      color = '#cccccc',
      size = '50',
      text = 'Loading',
    } = this.props;

    return (
      <div style={containerStyle}>
        <div style={childStyle}>
          {text} {spinner || <span style={spinnerMsg}>{defaultSpinner}</span>}
        </div>
        <div style={childStyle}>
          <Loader
            type={spinner || defaultSpinner}
            color={color}
            height={size}
            width={size}
          />
        </div>
      </div>
    );
  }

  render() {
    if (this.state.isLoading) {
      return this.renderLoading();
    }
    return this.props.render(this.state);
  }
}

Loading.propTypes = {
  render: PropTypes.func.isRequired,
  endPoint: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]).isRequired,
  trigger: PropTypes.number,
  byPass: PropTypes.bool,
};

Loading.defaultProps = {
  trigger: new Date().getTime(),
  byPass: false,
};

export default Loading;
