import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from '../Shared/Header';
// import Ticker from './Ticker';

// import data from '../hot-coins.json';
import { getHotCoins } from '../services/api';
// const result = Math.random().toFixed(8);
// const color = result > 0.5 ? 'green' : 'red';
// stateless component
// const App = () => {
//   return (
//     <div className="text-center">
//       <Header title = 'CryptoScanner' />
//       <p style={{color}}>
//         ETH: {result}
//       </p>
//     </div>
//   );
// };

// stateful component
export default class App extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      title: 'CryptoScanner',
      pageTitle: 'Hot Coins Today',
      hotcoins: [],
    };
  }

  componentDidMount() {
    // fetch data and setup timers
    getHotCoins().then((hotcoins) => {
      this.setState({
        hotcoins,
      });
    });
    console.log('App:componentDidMount');
  }

  render() {
    return (
      <div>
        <Header title={this.state.title} pageTitle={this.state.pageTitle} />

        <ul>
          {this.state.hotcoins.map((hotcoin, idx) =>
            <HotCoinPreview {...hotcoin,} key={idx} />)}
        </ul>
      </div>
    )
  }
}

App.propTypes = {
  hotcoins: PropTypes.array,
};
