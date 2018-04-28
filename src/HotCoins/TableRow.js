import React from 'react';
import PropTypes from 'prop-types';

import { millions } from '../format';

const styleVolPercent = (percent) => {
  const num = parseInt(percent, 10);
  let colorClass = 'no-color';

  if (num >= 350) {
    colorClass = 'colorCellGreenLightest';
  } else if (num >= 250 && num < 350) {
    colorClass = 'colorCellGreenLighter';
  } else if (num >= 100 && num < 250) {
    colorClass = 'colorCellGreenLight';
  } else if (num >= 90 && num < 110) {
    colorClass = 'colorCellYellow';
  } else if (num >= 75 && num < 90) {
    colorClass = 'colorCellRed';
  } else if (num >= 50 && num < 75) {
    colorClass = 'colorCellRedLight';
  } else if (num <= 50) {
    colorClass = 'colorCellRedLighter';
  } else {
    colorClass = 'colorCellNormal';
  }
  return `${colorClass} numeric-cell`;
};

/** Cell colors classes
  colorGreenLightest;
  colorGreenLighter;
  colorGreenLight;
  colorYellow;
  colorRed;
  colorRedLight;
  colorRedLighter;
*/

const HotCoinTableRow = ({
  coin,
  dayVolume,
  dayToWeekPercent,
  dayToMonthPercent,
  weekToMonthPercent,
  exchanges,
  onSelection,
}) => (
  <tr onClick={e => onSelection(coin, e)}>
    <td className="coin-cell">{coin}</td>
    <td className="numeric-cell">{millions(dayVolume)}</td>
    <td className={styleVolPercent(dayToWeekPercent)}>{dayToWeekPercent}%</td>
    <td className={styleVolPercent(dayToMonthPercent)}>{dayToMonthPercent}%</td>
    <td className={styleVolPercent(weekToMonthPercent)}>{weekToMonthPercent}%</td>
    <td>{exchanges.sort().map(exchange =>
      <span key={exchange} className="badge badge-secondary pill">{exchange}</span>)}
    </td>

  </tr>
);

HotCoinTableRow.propTypes = {
  coin: PropTypes.string.isRequired,
  dayVolume: PropTypes.number.isRequired,
  dayToWeekPercent: PropTypes.string.isRequired,
  dayToMonthPercent: PropTypes.string.isRequired,
  weekToMonthPercent: PropTypes.string.isRequired,
  exchanges: PropTypes.array.isRequired,
  onSelection: PropTypes.func.isRequired,
};

export default HotCoinTableRow;

/*
<td>{exchanges.sort().join(', ')}</td>
*/
