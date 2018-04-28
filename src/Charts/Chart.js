import React from 'react';
import PropTypes from 'prop-types';

import HighStock from 'highcharts/highstock';

import { highChartsTheme } from './candlestick-theme';
import { getConfig } from './candlestick-config'; 
import { getHistorical } from '../services/api';

class Chart extends React.Component {
  constructor(props){
    super(props);
    this.Highcharts = HighStock;
    this.setRef = this.setRef.bind(this);
  }

  componentDidMount() {
    this.themeChart();
    this.fetchData();
  }
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    if (nextProps.coin.length == 0 || 
       (this.props.coin == nextProps.coin)) 
    {
      return false;
    }
    return true;
  }
  componentDidUpdate(prevProps, prevState, prevContext) {
    this.fetchData();
  }
  componentWillUnmount() {
    this.chart.destroy();
  }

  themeChart() {
    // Apply the theme
    HighStock.setOptions(highChartsTheme);
  }

  updateChart(data) {
    const { coin, to } = this.props;
    this.renderChart(getConfig(coin, to, data));
  }

  fetchData() {
    const { coin, to } = this.props;
    const opts = {coin, to};
    //console.log(`coin: ${coin}, to: ${to}`);
    getHistorical(opts).then(data => {
      this.updateChart(data);
    }).catch(err => {
      console.error(err);
    })
  }

  setRef(ref) {
    this.chartRef = ref;
  }

  renderChart(config) {
    this.chart = new this.Highcharts[this.props.chartType](
      this.chartRef,
      config
    );
  }

  render() {
    return (
      <div ref={this.setRef} id="chart" className="CandleChart" {...this.props.domProps}></div>
    );
  }
}

Chart.propTypes = {
  coin: PropTypes.string,
  to: PropTypes.string,
  chartType: PropTypes.string.isRequired,
  config: PropTypes.object,
  domProps: PropTypes.object,
  callBack: PropTypes.func,
};

Chart.defaultProps = {
  domProps: {},
  chartType: 'stockChart',
  coin: 'BTC',
  to: 'USD',
};

export default Chart;
