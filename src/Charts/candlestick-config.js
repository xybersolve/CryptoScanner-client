/*
  candlestick-config.js

  Preconfigured CandleStick chart config, with dynamic
    * 'coin' & 'to' values,
    * data: {
    *   ohlc: [date, open, high, low, close]
    *   volume: [date, volume]
    * } 
  
  Routines:
    getConfig(coin, to , data): insert data and values into prepped config  


*/
import { convertUnixDate, highChartDate } from '../utilities/dates';

const groupingUnits = [[
    'week',
    [1],
  ],[
    'month',
    [1,2,3,4,6]  
]];

export const getConfig = (coin, to, data) => {
  data = prepChartData(data); 
  return {
    rangeSelector: {
        selected: 3,
        inputEnabled: false,
    },
  
    title: {
        text: `${coin}/${to} Daily`
    },
  
    yAxis: [{
        labels: {
            align: 'right',
            x: -3
        },
        title: {
            text: 'OHLC'
        },
        height: '60%',
        lineWidth: 2,
        resize: {
            enabled: true
        }
    }, {
        labels: {
            align: 'right',
            x: -3
        },
        title: {
            text: 'Volume'
        },
        top: '65%',
        height: '35%',
        offset: 0,
        lineWidth: 2
    }],
  
    tooltip: {
        split: true
    },
  
    series: [{
        type: 'candlestick',
        name: 'Price',
        data: data.ohlc,
        dataGrouping: {
            units: groupingUnits
        }
    }, {
        type: 'column',
        name: 'Volume',
        data: data.volume,
        yAxis: 1,
        dataGrouping: {
            units: groupingUnits
        }
    }]
  };
  //console.log(config);
  //console.dir(config);
  //return config;
};
/*
    Routines for data prep and formatting 

*/
const toSatoshis = amt => Math.round(parseInt(amt * 100000000, 10), 10);

const formatDate = (time) => convertUnixDate(time);

const getColor = (open, close) => close > open ? 'green' : 'red';
  
export const prepChartData = (data) => {
    return data.reduce((acc, rec, idx) => {
        const { time, open, high, low, close, volumefrom } = rec;
        const date = highChartDate(time);
        //console.log(idx, date, open, high, low, close, volumefrom);
        // filter null data
        if (open == 0) return;

        acc.ohlc[idx] = [
          date, 
          toSatoshis(open),
          toSatoshis(high),
          toSatoshis(low),
          toSatoshis(close),
        ];

        acc.volume[idx] = [
          date,
          volumefrom,
        ] 

        return acc;

    }, {ohlc:[], volume:[]})
};
  
/* Highcharts object array
data: [{
    x: 1,
    open: 9,
    high: 2,
    low: 4,
    close: 6,
    name: "Point2",
    color: "#00FF00"
}, {
    x: 1,
    open: 1,
    high: 4,
    low: 7,
    close: 7,
    name: "Point1",
    color: "#FF00FF"
}]
*/