import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import HighCharts from 'highcharts';

class CandleChart extends Component {
  componentDidMount() {
    console.log(': componentDidMount');
  }
  render() {
    return (
      <div className="CandleChart">
        <p>Chart: {this.props.coin}</p>
        <p>Data Length: {this.props.data.length}</p>
      </div>
    );
  }
}

CandleChart.propTypes = {
  coin: PropTypes.string,
  data: PropTypes.array,
};

CandleChart.defaultProps = {
  coin: '',
  data: [],
};

export default CandleChart;
