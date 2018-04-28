
export const convertUnixDate = data => new Date(data * 1000);

export const convertUTCToLocalDate = (date) => {
  const newDate = new Date(date.getTime() + date.getTimezoneOffset() * 60 * 1000);
  const offset = date.getTimezoneOffset() / 60;
  const hours = date.getHours();
  newDate.setHours(hours - offset);
  return newDate;
};

export const highChartDate = (date) => {
  // let now = (date) ? date : new Date();
  const now = convertUnixDate(date);
  const mm = now.getMonth() + 1;
  const dd = now.getDate();

  return [(dd > 9 ? '' : '0') + dd,
    (mm > 9 ? '' : '0') + mm,
    now.getFullYear(),
  ].join('/');
};

export const yyyymmdd = (dat) => {
  let d = dat ? new Date(dat) : new Date();
  let yyyy = d.getFullYear();
  let mm = d.getMonth() + 1;
  let dd = d.getDate();
  return `${yyyy}${mm}${dd}`
};
