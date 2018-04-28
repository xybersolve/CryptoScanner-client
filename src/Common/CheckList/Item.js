import React from 'react';
import PropTypes from 'prop-types';

import CheckBox from '../Checkbox';

const Item = props => (
  <li className="CheckListItem">
    <CheckBox
      checked={props.item.enabled}
      labelText={props.item.display}
      name={props.item.id}
      onChange={props.onChange}
    />
  </li>
);


Item.propTypes = {
  item: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Item;
