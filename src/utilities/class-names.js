/*
  class-name.js

  create valid className strings (space delimited)
    from key value pairs of {class: condition}

className = { classNames({
    'firstClass': true,
    'secondClass': true,
    'notThisClass': false,
  })
};

*/

const classNames = classes => Object.entries(classes)
  .filter(([key, value]) => value) // filter non-truthy
  .map(([key, value]) => key) // remove boolen value, for class key
  .join(' '); // join with spaces

export default classNames;
