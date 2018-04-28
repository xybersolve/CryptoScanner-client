/*
  index.js

  Primary Container and Entry Point for Hotcoins
*/
import React from 'react';
import PropTypes from 'prop-types';

import HorizontalSplit  from '../Common/Layout';
import Header from '../Shared/Header';

import HotCoinDisplay from './Display';
import HotCoinOptions from './Options';
import HotCoinToolbar from './Toolbar';
import Chart from '../Charts/Chart';

class HotCoins extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coin: 'BTC',
      showOptions: false,
      hotCoinsLastUpdated: new Date().getTime(),
    };
    this.toggleOptions = this.toggleOptions.bind(this);
    this.handleCoinSelection = this.handleCoinSelection.bind(this);
    this.refreshQuery = this.refreshQuery.bind(this);
  }
  componentWillMount() {
    console.log('HotCoins->componentWillMount()');
  }
  toggleOptions(show) {
    console.log(`Toggle Options: ${show}`);
    this.setState({
      showOptions: show,
    });
  }
  handleCoinSelection(coin) {
    console.log(`HotCoins->handleCoinSelection(${coin})`);
    this.setState({
      coin,
    });
  }
  refreshQuery() {
    this.setState({
      hotCoinsLastUpdated: new Date().getTime(),
    });
  }
  render() {
    return (
      <div className="HotCoins">
        <Header title={this.props.title} />

        <HotCoinToolbar
          toggleOptions={this.toggleOptions}
          refreshQuery={this.refreshQuery}
        />

        <HotCoinOptions hide={!this.state.showOptions} />

        <HorizontalSplit>
          <HotCoinDisplay
            onCoinSelect={this.handleCoinSelection}
            updated={this.state.hotCoinsLastUpdated}
          />

          <Chart
            coin={this.state.coin}
          />
        </HorizontalSplit>

      </div>

    );
  }
}

HotCoins.propTypes = {
  title: PropTypes.string,
};

HotCoins.defaultProps = {
  title: 'Crypto HeatSeeker',
};

export default HotCoins;

/*
        <HorizontalSplit>
          <div style={testStyle}>HotCoins Placeholder</div>
          <div style={testStyle}>Chart Placeholder</div>
        </HorizontalSplit>


       <Header title={this.props.title} />
        <HotCoinToolbar
          toggleOptions={this.toggleOptions}
          refreshQuery={this.refreshQuery}
        />
        {this.state.showOptions && <HotCoinOptions />}

           <HotCoinDisplay
            onCoinSelect={this.handleCoinSelection}
            updated={this.state.hotCoinsLastUpdated}
          />


          <CandleChart
            coin={this.state.coin || ''}
          />

layout testing
    const testStyle = { color: 'white', fontSize: '24px' };

      <div className="HotCoins">
        <div style={testStyle}>Toolbar</div>
        <HorizontalSplit>
          <div style={testStyle}>HotCoins Placeholder</div>
          <div style={testStyle}>Chart Placeholder</div>
        </HorizontalSplit>
      </div>


*/
