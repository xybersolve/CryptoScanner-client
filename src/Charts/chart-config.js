const nullNode = null;

export default {
  rangeSelector: {
    selected: 1,
  },
  title: {
    text: 'BTC-USD'
  },
  series: [{
    type: 'candlestick',
    name: 'BTC',
    data: [
      {x: 1, open: 10, high: 15, low: 8, close: 12, name: 'Feb 12, 2017 '},
      {x: 2, open: 12, high: 22, low: 10, close: 18, name: 'Feb 13, 2017 '},
    ],
    dataGrouping: {
        units: [
            [
                'week', // unit name
                [1] // allowed multiples
            ], [
                'month',
                [1, 2, 3, 4, 6]
            ]
        ]
    }
  }]
}  
/*
0: {x: 1, open: "401.00", high: "414.00", low: "371.00", close: "385.00", …}
1: {x: 2, open: "385.00", high: "397.00", low: "376.00", close: "379.00", …}
2: {x: 3, open: "379.00", high: "392.00", low: "372.00", close: "373.00", …}
3: {x: 4, open: "373.00", high: "385.00", low: "350.00", close: "363.00", …}
*/