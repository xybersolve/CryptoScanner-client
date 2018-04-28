import { convertUnixDate } from '../utilities/dates';

const toSatoshis = amt => Math.round(parseInt(amt * 100000000, 10), 10);
const formatDate = (time) => {
  return convertUnixDate(time).toString().slice(0, 15);
}

/* Incoming data: cryptocompare API 
close:0.00000385
high:0.00000414
low:0.00000371
open:0.00000401
time:1476403200
volumefrom:1514180.37
volumeto:6
*/
export const prepChartData = (data) => {
  return data.reduce((acc, rec, idx) => {
    const { time, open, high, low, close, volumefrom } = rec;
    const date = formatDate(time);
    acc.ohlc[idx] = [
      date, 
      toSatoshis(open),
      toSatoshis(high),
      toSatoshis(low),
      toSatoshis(close),
    ];

    acc.volume[idx] = [
      date,
      volumefrom
    ] 

    return acc;

  }, {ohlc:[], volume:[]})

}

/* INCOMING
data: [{
  close:0.00000385
  high:0.00000414
  low:0.00000371
  open:0.00000401
  time:1476403200
  volumefrom:1514180.37
  volumeto:6
}, { ...  

EXPECTED (raw)

data: [[ x,open,high,low,close], [...

- OR - 
data: [{
  x: 1,en: 9,
  high: 2,
  low: 4,
  close: 6,
  name: "Point2",
  color: "#00FF00"
}, {

EXPECTED (object)  
data: {
  ohlc: [],
  volume: []
}

*/