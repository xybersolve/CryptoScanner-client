import React from 'react';

import SortCell from '../Common/SortCell';

const HotCoinTableHeader = ({ handleSort, lastSort }) => (
  <thead>
    <tr>
      <SortCell
        width={80}
        field="coin"
        name="Coin"
        dataType="text"
        handleSort={handleSort}
        lastSort={lastSort}
      />

      <SortCell
        width={80}
        field="dayVolume"
        name="Day Vol."
        handleSort={handleSort}
        lastSort={lastSort}
      />

      <SortCell
        field="dayToWeekPercent"
        name="Day/Week Vol. %"
        handleSort={handleSort}
        lastSort={lastSort}
      />

      <SortCell
        field="dayToMonthPercent"
        name="Day/Month Vol. %"
        handleSort={handleSort}
        lastSort={lastSort}
      />

      <SortCell
        field="weekToMonthPercent"
        name="Week/Month Vol. %"
        handleSort={handleSort}
        lastSort={lastSort}
      />

      <th width={200} >
         Exchanges
      </th>
    </tr>
  </thead>
);

export default HotCoinTableHeader;
