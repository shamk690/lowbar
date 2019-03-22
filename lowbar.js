const _ = {};

_.identity = x => {
  return x;
};

_.take = (x, y) => {
  if (y === undefined) {
    return x.slice(0, 1);
  } else {
    return x.slice(0, y);
  }
};

_.uniq = array => {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (!result.includes(array[i])) {
      result.push(array[i]);
    }
  }
  return result;
};
_.map = (array, func = x => x) => {
  let arr = [];

  array.forEach(element => {
    arr.push(func(element));
  });

  return arr;
}
module.exports = _;
