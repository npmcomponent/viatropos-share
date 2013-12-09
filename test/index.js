var share = 'undefined' == typeof window
  ? require('..')
  : require('share'); // how to do this better?

var assert = require('assert');

describe('share', function(){
  it('should test', function(){
    assert.equal(1 + 1, 2);
  });
});
