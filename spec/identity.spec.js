const { expect } = require('chai');
const _ = require('../lowbar');
const { spy } = require('sinon');

describe('#identity', () => {
  it('returns the value passed as an argument', () => {
    expect(_.identity(3)).to.equal(3);
    expect(_.identity('hello')).to.equal('hello');
    expect(_.identity(true)).to.equal(true);
  });
  it('returns a reference to the same reference type passed as an argument', () => {
    const arr = [];
    expect(_.identity(arr)).to.equal(arr);
  });
});

describe('#take', () => {
  it('returns first item in an array when passed no second argument', () => {
    expect(_.take([1, 2, 3])).to.eql([1]);
  });
  it('returns an empty array when passed zero as a second argrument', () => {
    expect(_.take([1, 2, 3], 0)).to.eql([]);
  });
  it('returns an array when passed interger as an argrument', () => {
    expect(_.take([1, 2, 3], 3)).to.eql([1, 2, 3]);
  });
  it('returns an array when passed interger which is too large as an argrument', () => {
    expect(_.take([1, 2, 3], 5)).to.eql([1, 2, 3]);
  });
});

describe('#uniq', () => {
  it('returns single item array', () => {
    expect(_.uniq([3])).to.eql([3]);
    expect(_.uniq(['hello'])).to.eql(['hello']);
    expect(_.uniq([true])).to.eql([true]);
  });
  it('filters out repeat values', () => {
    expect(_.uniq([1, 1])).to.eql([1]);
    expect(_.uniq([1, 1, 2, 3, 3])).to.eql([1, 2, 3]);
  });
  it('filters out the repeat string', () => {
    expect(_.uniq(['Hello', 'Hello'])).to.eql(['Hello']);
    expect(_.uniq(['Red', 'Green', 'Red', 'Blue', 'Green'])).to.eql([
      'Red',
      'Green',
      'Blue'
    ]);
  });
});

describe('#map', () => {
  it('It takes an empty array and returns the empty array', () => {
    expect(_.map([])).to.eql([]);
  });
  it('create a new array with value and one argument', () => {
    expect(_.map(['hello'])).to.eql(['hello']);
    expect(_.map([true])).to.eql([true]);
    expect(_.map([1])).to.eql([1]);
  });
  it('create a new array with multiple values and one argument', () => {
    expect(_.map(['hello', 'World'])).to.eql(['hello', 'World']);
    expect(_.map([1, 3, 2, 6, 5])).to.eql([1, 3, 2, 6, 5]);
  });
  it('It checks if spy function runs', () => {
    let spyFunction = spy();
    let arr = [1];
    _.map(arr, spyFunction);

    expect(spyFunction.callCount).to.eql(1);
  });
  it('It checks the number of times spy function runs', () => {
    let spyFunction = spy();
    let arr = [1, 2, 3];
    _.map(arr, spyFunction);

    expect(spyFunction.callCount).to.eql(3);
  });
});

describe.only('#filter', () => {
  it('returns an array', () => {
    expect(_.filter([])).to.eql([]);
  });
  it('filters array', () => {
    let array = ['hello'];
    let string = 'hello';
    let string2 = 'world';
    expect(_.filter(array, string)).to.eql(['hello']);
    expect(_.filter(array, string2)).to.eql([]);
  });
});
