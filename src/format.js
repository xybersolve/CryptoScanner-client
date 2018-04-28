
export const toPrice = cents =>
  `$${(cents / 100).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;

export const commatize = x =>
  x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

export const millions = num =>  `${Math.round(num / 1000000)}M`;
