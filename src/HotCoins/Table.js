import React from 'react';
import PropTypes from 'prop-types';

import HotCoinTableHeader from './TableHeader';
import HotCoinTableRow from './TableRow';

import { sortByKey } from '../helpers';

class HotCoinTable extends React.Component {
  constructor(props) {
    super(props);
    // can pass in function with, prevState, nextState
    // this.setState((prevState, props) => stateChange)
    this.state = {
      hotcoins: [],
      lastSortOrder: {},
    };
    this.handleSelection = this.handleSelection.bind(this);
    this.handleSort = this.handleSort.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    console.dir(nextProps.hotcoins);
    this.setState({
      hotcoins: nextProps.hotcoins,
    });
  }
  componentWillUpdate() {
    console.dir(this.props.hotcoins);
  }
  componentDidUpdate(prevProps, prevState) {
    // if(prevProps.myProp !== this.props.myProp) {}
    console.dir(this.props.hotcoins);
  }

  handleSelection(coin) {
    console.log(`HotCoinList->handleSelection(${coin})`);
    this.props.onSelection(coin);
  }

  handleSort(key, dataType) {
    const { hotcoins } = this.props;
    const { lastSortOrder } = this.state;
    let sortOrder;

    if (lastSortOrder[key]) {
      sortOrder = lastSortOrder[key] === 'asc' ? 'desc' : 'asc';
    } else  {
      sortOrder = 'asc';
    }
    // console.log(`HotCoinList-> handleSort()': ${key}, ${dataType}, ${sortOrder}`);
    hotcoins.sort(sortByKey(key, dataType, sortOrder));

    // persist the last sort order
    this.setState({
      hotcoins,
      lastSortOrder: {
        [key]: sortOrder,
      },
    });
  }

  render() {
    console.log(`HotCoinsList->render(), hotcoins: ${this.props.hotcoins.length}`);
    console.dir(this.props.hotcoins);
    return (
      <table className="HotCoinsTable">
        <HotCoinTableHeader
          handleSort={this.handleSort}
          lastSort={this.state.lastSortOrder}
        />
        <tbody>
          {this.props.hotcoins.map((hotcoin, idx) =>
            (<HotCoinTableRow
              key={idx}
              onSelection={this.handleSelection}
              {...hotcoin}
            />))}
        </tbody>
      </table>
    );
  }
}

HotCoinTable.propTypes = {
  hotcoins: PropTypes.array.isRequired,
  onSelection: PropTypes.func.isRequired,
};

HotCoinTable.defaultProps = {
  hotcoins: [],
};

export default HotCoinTable;

/*

coin:"LTC"
dayToMonthPercent:"124"
dayToMonthRatio:"1.24"
dayToWeekPercent:"79"
dayToWeekRatio:"0.79"
dayVolume:864514000
exchanges:(3) ["binance", "bittrex", "poloniex"]
weekToMonthPercent:"146"
weekToMonthRatio:"1.46"
*/
