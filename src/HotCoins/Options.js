import React from 'react';
import PropTypes from 'prop-types';

// import Toast from 'grommet/components/Toast';
import CheckBox from '../Common/Checkbox/index';
import CheckList from '../Common/CheckList';
import classNames from '../utilities/class-names';
import { saveOptions } from '../services/api';
import exchanges from '../services/exchanges';

// used to coerce data type, to number
const numericFields = [
  'dayToMonthThreshold',
  'dayToWeekThreshold',
  'weekToMonthThreshold',
  'autoRefreshInterval',
  'volumeThreshold',
];

class HotCoinOptions extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleExchangeChange = this.handleExchangeChange.bind(this);
    this.handleUpdateExchanges = this.handleUpdateExchanges.bind(this);
    // move to componentWillMount, pulling from api
    this.state = {
      dayToMonthThreshold: 150,
      dayToWeekThreshold: 150,
      weekToMonthThreshold: 150,
      autoRefresh: true,
      autoRefreshInterval: 5,
      volumeThreshold: 10,
      exchanges,
    };
  }
  componentDidMount() {
    console.log('Options->componentDidMount(), exchanges');
    console.log(exchanges);
  }

  save(data) {
    console.log('Data for submission');
    console.log(data);

    const {
      dayToMonthThreshold,
      dayToWeekThreshold,
      weekToMonthThreshold,
      autoRefresh,
      autoRefreshInterval,
      volumeThreshold,
      exchanges,
    } = data;

    saveOptions({
      dayToMonthThreshold,
      dayToWeekThreshold,
      weekToMonthThreshold,
      autoRefresh,
      autoRefreshInterval,
      volumeThreshold,
      exchanges,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.save(this.state);
  }

  handleExchangeChange(e) {
    // checkbox names to object names
    const { name: id, checked: enabled } = e.target;

    this.setState((state) => {
      const { exchanges } = state;
      const idx = exchanges.findIndex(elem => elem.id === id);
      exchanges[idx].enabled = enabled;
      return {
        exchanges,
      };
    }, () => {
      // console.log(this.state);
    });
  }

  handleChange(e) {
    const { target } = e;
    const { name } = target;
    let value = target.type === 'checkbox' ? target.checked : target.value;
    value = (numericFields.indexOf(name) > -1) ? parseInt(value, 10) : value;
    this.setState({
      [name]: value,
    }, () => {
      // if we want to save on every change, do so here
      // this.save(this.state);
      // console.dir(this.state);
    });
  }

  handleUpdateExchanges() {}

  render() {
    //  common field attributes
    const numericProps = {
      type: 'number',
      className: 'form-control xs-number',
      onChange: this.handleChange,
    }

    const thresholdProps = {
      ...numericProps,
      min: '50',
      max: '250',
      step: '10',
    };

    // show/reveal animation class
    const optionClasses = {
      HotCoinOptions: true,
      show:!this.props.hide,
    };

    return (
      <form onSubmit={this.handleSubmit}>
        <div className={classNames(optionClasses)}>
          <div className="option-panel">
            <h5>
              Exchanges:
            </h5>
            <div className="input-group">
              <CheckList
                onChange={this.handleExchangeChange}
                items={exchanges}
                name="exchanges"
              />
            </div>
          </div>

          <div className="option-panel">
            <h5>
              Percent Thresholds:
            </h5>
            <div className="input-group">
              <label htmlFor="dayToMonthThreshold">
                Day to Month:
                <input
                  name="dayToMonthThreshold"
                  {...thresholdProps}
                  value={this.state.dayToMonthThreshold}
                />
              </label>
            </div>

            <div className="input-group">
              <label htmlFor="dayToWeekThreshold">
                Day to Week:
                <input
                  name="dayToWeekThreshold"
                  {...thresholdProps}
                  value={this.state.dayToWeekThreshold}
                />
              </label><br />
            </div>

            <div className="input-group">
              <label htmlFor="weekToMonthThreshold">
                Week to Month:
                <input
                  name="weekToMonthThreshold"
                  {...thresholdProps}
                  value={this.state.weekToMonthThreshold}
                />
              </label><br />
            </div>
          </div>

          <div className="option-panel">
            <h5>
              Refresh Query:
            </h5>

            <div className="input-group">
              <CheckBox
                checked
                labelText="Auto Refresh"
                name="autoRefresh"
                onChange={this.handleChange}
              />
            </div>

            <div className="input-group">
              <label htmlFor="autoRefreshInterval">
                Every (min):
                <input
                  disabled={! this.state.autoRefresh}
                  name="autoRefreshInterval"
                  {...numericProps}
                  max={60}
                  min={1}
                  step={1}
                  value={this.state.autoRefreshInterval}
                />
              </label>
            </div>
          </div>

          <div className="option-panel">
            <h5>
              Volume Minimum:
            </h5>
            <div className="input-group">
              <label htmlFor="volumeThreshold">
                Daily Volume (M):
                <input
                  name="volumeThreshold"
                  {...numericProps}
                  max={50}
                  min={5}
                  step={1}
                  value={this.state.volumeThreshold}
                />
              </label>
            </div>
          </div>

          <div className="option-panel clear">
            <div className="input-group">
              <button
                value="Save Changes"
                name="saveChanges"
                onClick={this.handleSubmit} >
              Save Changes
              </button>
            </div>
          </div>

        </div>

      </form>
    );
  }
}

HotCoinOptions.propTypes = {
  options: PropTypes.any,
  hide: PropTypes.bool,
};

HotCoinOptions.defaultProps = {
  options: {},
  hide: true,
};

export default HotCoinOptions;

/*
<div className="HotCoinOptions" style={this.props.hide ? {height: 0, padding:0}: {height: '350px'}}>

              <label htmlFor="runScheduler">
                Auto-Query HeatSeeker
                <input
                  type="checkbox"
                  name="runScheduler"
                  onChange={this.handleChange}
                />
              </label>
*/
