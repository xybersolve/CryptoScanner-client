export const rando = arr =>
  arr[Math.floor(Math.random() * arr.length)];

export const slugify = text =>
  text.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text

export const getFunTitles = () => {
  const subjectives = ['potentially', 'possibly', 'eligible'];
  const adjectives = ['awesome', 'killer', 'winning', 'rippin'];
  const nouns = ['coins', 'alts', 'alt-coins', 'candidiates'];

  return `${rando(subjectives)} ${rando(adjectives)} ${rando(nouns)}`;
};

export const sortByKey = (key, dataType, sortOrder) => (a, b) => {
  let result; let A; let B;
  const order = sortOrder === 'desc' ? -1 : 1;

  if (dataType === 'numeric') {
    A = parseInt(a[key], 10);
    B = parseInt(b[key], 10);
  } else {
    A = a[key];
    B = b[key];
  }
  if (A < B) result = -1;
  if (A > B) result = 1;
  return order * result;
};
