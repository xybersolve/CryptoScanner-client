/*
  CheckList

  Reusable React List with checkable items
    * Checklist Items expect and depend on:
       {display: 'What is shown', id: 'unique identifier'}
       - { destrusture: rename } - if necessary

  Dependencies:
    Checkbox.js - XyberSolve's reusable custom checkbox
*/
import React from 'react';
import PropTypes from 'prop-types';

import Item from './Item';

const CheckList = props => (
  <ul className={props.className}>
    {props.items.map((item, idx) =>
      <Item key={idx} item={item} onChange={props.onChange} />)}
  </ul>
);

CheckList.propTypes = {
  items: PropTypes.array,
  className: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

CheckList.defaultProps = {
  items: [],
  className: 'CheckList',
};

export default CheckList;

/*
      <ul className={this.props.className}>
        {this.props.items.map((item, idx) =>{
          <Item item={item} />
        })}
      </ul>
*/
