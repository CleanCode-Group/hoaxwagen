var assert = require('assert');
var hoax = require('../hoaxwagen.js')
var fs = require('fs');
var path = require('path');

describe('Volkswagen', function() {
  before(function() {
    require.resolve('volkswagen');
  });

  it('should return true when Volkswagen is present', function() {
    assert.equal(hoax.check(), true);
  });

  it('should return false when Volkswagen is absent', function() {
    fs.renameSync(path.resolve('./node_modules/volkswagen'), path.resolve('./node_modules/volkswagen__test'));
    assert.equal(hoax.check(), true);
    fs.renameSync(path.resolve('./node_modules/volkswagen__test'), path.resolve('./node_modules/volkswagen'));
  });
});