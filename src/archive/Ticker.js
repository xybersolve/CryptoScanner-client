import React from 'react';

const Ticker = React.createClass({
  getInitialState() {
    return { secondsElapsed: 0 };
  },
  tick: () => {
    this.setState({ secondsElapsed: this.state.secondsElapsed + 1 });
  },
  componentDidMount: () => {
    this.interval = setInterval(this.tick, 1000);
  },
  componentWillUnmount: () => {
    clearInterval(this.interval);
  },
  render: () => (
    <div>
      <h3>Countdown</h3>
        Seconds eplapsed: {this.state.secondsElapsed}
    </div>
  ),

});

export default Ticker;
