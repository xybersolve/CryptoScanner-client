/*
  SortCell

  Reusable sortable table column heading '<th>'
    * 'asc' & 'desc' sort
    * icon showing sort order
*/

import React from 'react';

import { MdArrowDropUp, MdArrowDropDown } from 'react-icons/lib/md';


const iconStyles = { color: '#dddddd', size: '15px' };
const sortIcons = {
  asc: <MdArrowDropUp {...iconStyles} />,
  desc: <MdArrowDropDown {...iconStyles} />,
};

const cellStyle = { verticalAlign: 'center', height: '35px' };
const spaceStyle = { display: 'inline-block', height: '15px', width: '15px' };
const Space = () => <div style={spaceStyle} />;

const SortCell = ({
  field,
  name,
  width = 100,
  handleSort,
  lastSort,
  dataType = 'numeric',
}) => (
  <th
    style={cellStyle}
    width={width}
    className="sortable"
    onClick={() => handleSort(field, dataType)}
  >
    {name}
    &nbsp;&nbsp;
    {lastSort[field] ? sortIcons[lastSort[field]] : <Space />}
  </th>
);

export default SortCell;
