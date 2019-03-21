const { expect } = require('chai');
const { _ } = require('./lowbar.js');

describe('_.identity', () => {
  it('returns the argement', () => {
    expect({ x: 'x' }).to.eql.({ x: 'x'})
  });
});
