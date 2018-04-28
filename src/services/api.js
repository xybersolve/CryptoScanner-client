/*
  Shared Calls to Node API Server
*/

import axios from 'axios';
import { post } from './postData';
// import { fakeData } from './fake-data';

const restUrl = 'http://localhost:7070/api/v1';
const cryptoCompareUrl = 'https://min-api.cryptocompare.com/data';
// const cors = {
//  headers: { 'Access-Control-Allow-Origin': '*' }
// };

// const fetchCors = {
//   cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//   credentials: 'omit', // include, *omit, 'same-origin'
//   headers: {
//     'user-agent': 'Mozilla/4.0 MDN Example',
//     'content-type': 'application/json',
//   },
//   mode: 'cors', // no-cors, *same-origin
//   redirect: 'follow', // *manual, error
//   referrer: 'no-referrer', // *client
// };

// 'http://localhost:7070/api/v1/heatseeker/hotcoins'
export const getHotCoins = () => {
  const url = `${restUrl}/heatseeker/hotcoins/`;
  return axios.get(url).then(results => results.data);
};

// export const getHistorical = () => {
//   const url = `${restUrl}/some/path`;
//   return fetch(url).then(data => data.json());
// };

export const saveOptions = (data) => {
  const url = `${restUrl}/options/save`;
  post(url, data)
    .then((resp) => {
      console.log(resp);
    })
    .catch(console.error);
};

export const getHistorical = ({ coin = 'ETH', to = 'BTC' }) => {
  if (coin === to) {
    const errMsg = `CryptoCompare API error: to and from must not be different coins: coin: ${coin}, to: ${to}`;
    return Promise.reject(errMsg);
  }
  console.log(`coin: ${coin}, to: ${to}`);
  const url = `${cryptoCompareUrl}/histoday?fsym=${coin}&tsym=${to}&limit=60&aggregate=1&e=CCCAGG`;
  console.log(url);
  // const url = `${cryptoCompareUrl}/histohour?fsym=${coin}&tsym=${to}&limit=365&aggregate=24&e=CCCAGG`;
  return fetch(url).then(data => data.json()).then(data => data.Data);
};

export const getPrice = ({ coin = 'BTC', to = 'USD' }) => {
  // https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=BTC,USD,EUR
  const url = `${cryptoCompareUrl}/price?fsym=${coin}&tsyms=${to}`;
  return fetch(url);
};

// export const updateExchanges = ({ exchanges = [] }) => {
//   const url = `${restUrl}/`;
// }
/*
Data: [
{time: 1476316800, close: 0.00000401, high: 0.00000425, low: 0.000004, open: 0.00000425, …}
{time: 1476403200, close: 0.00000385, high: 0.00000414, low: 0.00000371, open: 0.00000401, …}
{time: 1476489600, close: 0.00000379, high: 0.00000397, low: 0.00000376, open: 0.00000385, …}
]
*/
