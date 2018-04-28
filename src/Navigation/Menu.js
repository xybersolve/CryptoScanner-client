import React from 'react';

import MenuItem from './MenuItem';

const Menu = () => (
  <navigation className="Menu">
    <ul>
      <MenuItem>
        Heat Seeker
      </MenuItem>

      <MenuItem>
        Watch List
      </MenuItem>

      <MenuItem>
        Portfolio
      </MenuItem>
    </ul>
  </navigation>
);

export default Menu;
