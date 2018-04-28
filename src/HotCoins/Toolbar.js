import React from 'react';
import PropTypes from 'prop-types';

import { MdSettingsApplications, MdRefresh } from 'react-icons/lib/md';

// import Toolbar from '../Layout';
import ToggleButton from '../Common/ToggleButton';
// import ToggleButton from '../Common/Toggle';
import PushButton from '../Common/PushButton';

// import styles from './styles/hotcoins-toolbar';
const iconStyles = { color: '#cccccc', size: '25px' };

const HotCoinToolbar = ({ toggleOptions, refreshQuery }) => (
  <div className="HotCoinToolbar">
    <ToggleButton
      enabled={false}
      enabledClassName="toggle-on"
      disabledClassName="toggle-off"
      className="toggle"
      enabledText="Hide Options"
      disabledText="Show Options"
      fireOnToggle={toggleOptions}
    >
      <MdSettingsApplications {...iconStyles} />
    </ToggleButton>

    <PushButton
      text="Refresh Query"
      callback={refreshQuery}
    >
      <MdRefresh  {...iconStyles} />
    </PushButton>

  </div>
);


HotCoinToolbar.propTypes = {
  toggleOptions: PropTypes.func,
};

HotCoinToolbar.defaultProps = {
  toggleOptions: () => {},
};

export default HotCoinToolbar;
