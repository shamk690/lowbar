const { expect } = require('chai');

const _ = require('../lowbar');

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
describe.only('#uniq', () => {
  it('returns single item array', () => {
    expect([3]).to.eql([3]);
    expect(['hello']).to.eql(['hello']);
    expect([true]).to.eql([true]);
  });
  it('filters out repeat values', () => {
    expect(_.uniq([1, 1])).to.eql([1]);
  });
});
