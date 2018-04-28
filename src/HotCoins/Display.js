import React from 'react';
import PropTypes from 'prop-types';

import Loading from '../Common/Loading';
import HotCoinTable from './Table';

import { getHotCoins } from '../services/api';

class HotCoinDisplay extends React.Component {
  constructor() {
    super();
    this.state = {
      hotcoins: [],
    };
    this.handleSelection = this.handleSelection.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    // console.log('HotCoins->componentWillReceiveProps()');
    // console.dir(nextProps);
    // console.dir(this.props);
    if (nextProps.updated !== this.state.updated) {
      console.log('..should fire updateHotCoins');
      this.setState({
        updated: nextProps.updated,
      });
    }
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.updated === this.props.updated;
  }

  handleSelection(coin) {
    console.log(`HotCoin->handleSelection(${coin})`);
    this.props.onCoinSelect(coin);
  }


  render() {
    return (
      <Loading
        byPass={false}
        trigger={this.state.updated}
        endPoint={getHotCoins}
        render={({ data }) => (
          <HotCoinTable
            hotcoins={data}
            onSelection={this.handleSelection}
          />
        )}
      />
    );
  }
}

HotCoinDisplay.propTypes = {
  onCoinSelect: PropTypes.func.isRequired,
};

export default HotCoinDisplay;
