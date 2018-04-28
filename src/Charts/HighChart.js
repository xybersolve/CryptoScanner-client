import React from 'react';
import PropTypes from 'prop-types';

class Chart extends React.Component {
  render() {
    return (
      <div className="Chart"></div>
    );
  }
}

Chart.propTypes = {
  config: PropTypes.string.isRequired,
  domProps: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
};

Chart.defaultProps = {
  domProps: {},
  callback: () => {},
};

export default Chart;
