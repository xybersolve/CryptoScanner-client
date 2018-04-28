import axios from 'axios';

export const postData = (url, data) => {
  // Default options marked with *
  console.log('postData');
  console.log(JSON.stringify(data));
  // return Promise.resolve({});

  return fetch(url, {
    body: JSON.stringify(data), // must match 'Content-Type' header
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'omit', // include, *omit, 'same-origin'
    headers: {
      'user-agent': 'Mozilla/4.0 MDN Example',
      'content-type': 'application/json',
    },
    method: 'POST', // *GET, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *same-origin
    redirect: 'follow', // *manual, error
    referrer: 'no-referrer', // *client
  })
    .then((response) => {
      console.log('Response from fetch POST');
      console.log(response);
    })
};

export const post = (url, data) => {
  return axios({
    method: 'post',
    url,
    data: JSON.stringify(data),
    config: { headers: { 'Content-Type': 'application/json' } },
  })
    .then(response => response)
    .catch(console.error);
};
