var share = 'undefined' == typeof window
  ? require('..')
  : require('share'); // how to do this better?

var assert = require('assert');

describe('share', function(){
  it('should test', function(){
    share.twitter('https://github.com', "Woohoo!");
    share.pinterest('https://github.com', 'http://octodex.github.com/images/twenty-percent-cooler-octocat.png');
    share.reddit('https://github.com');
    share.facebook('https://github.com', "Woohoo!");
  });
});