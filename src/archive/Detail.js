import React from 'react';
import PropTypes from 'prop-types';

class HotCoinDetail extends React.Component {
  componentDidMount() {
    console.log(': componentDidMount');
  }
  gotSelect() {

  }
  render() {
    return (
      <div className="Detail">
        <h2>{this.props.coin}</h2>
      </div>
    );
  }
}

HotCoinDetail.propTypes = {
  coin: PropTypes.string,
};

HotCoinDetail.defaultProps = {
  coin: 'BTC',
};

export default HotCoinDetail;
