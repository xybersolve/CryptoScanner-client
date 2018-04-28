/*
  Layout.js

  Workbench for Sass styles and general layout features
*/
import React from 'react';
// Material icons
import {
  MdSettingsApplications,
  MdRefresh,
  MdCheck,
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdSearch,
} from 'react-icons/lib/md';

import '../';

const Layout = () => (
  <div id="layout">
    <header>
      { /* FaAreaChart color="gray" size="50px" */ }
      <span className="app-title">
        CryptoScanner
      </span>

      <div id="tabbar">
        <button className="active">
          <MdSearch color="gray" size="24px" />
          &nbsp;&nbsp;HeatSeeker
        </button>
        <button>
          <MdCheck color="gray" size="24px" />
          &nbsp;&nbsp;Watchlist
        </button>
      </div>
    </header>
    <div id="main">
      <div id="toolbar">

        <button className="xs-button">
          <MdRefresh color="gray" size="25px" />
          Refresh
        </button>

        <button className="xs-button">
          <MdSettingsApplications color="gray" size="25px" />
          Options
        </button>
      </div>
      <aside id="options">
        { /* <MdSettingsApplications color="gray" size="50px" /> */ }
        <MdSettingsApplications color="gray" size="24px" />
        Options
      </aside>
      <div id="table">
        <table id="layout">
          <thead>
            <tr>
              <th width="60">Watch</th>
              <th width="120">Coin</th>
              <th width="80">Day</th>
              <th width="80">$green</th>
              <th width="80">$green1</th>
              <th width="80">$green2</th>
              <th width="80">$yellow</th>
              <th width="80">$red</th>
              <th width="80">$red1</th>
              <th width="80">$red2</th>
              <th>Exchanges</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <MdCheckBoxOutlineBlank color="gray" size="24px" />
              </td>
              <td>SNT</td>
              <td>20M</td>
              <td>250%</td>
              <td>200%</td>
              <td>150%</td>
              <td>100%</td>
              <td>75%</td>
              <td>50%</td>
              <td>25%</td>

              <td>Binance, Bittrex, Poloniex</td>
            </tr>
            <tr>
              <td>
                <MdCheckBox color="gray" size="24px" />
              </td>
              <td>SNT</td>
              <td>20M</td>
              <td>250%</td>
              <td>200%</td>
              <td>150%</td>
              <td>100%</td>
              <td>75%</td>
              <td>50%</td>
              <td>25%</td>

              <td>Binance, Bittrex, Poloniex</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div id="chart">
        Chart
      </div>
    </div>
    <footer>
      Footer
    </footer>
  </div>
);

export default Layout;
