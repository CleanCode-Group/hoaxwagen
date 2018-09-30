var assert = require('assert');
var hoax = require('../hoaxwagen.js');

describe('Volkswagen', function () {
  before(function () {
    require.resolve('volkswagen');
  });

  it('should return true when Volkswagen is present', function () {
    assert.equal(hoax.isFraud(), true);
  });

  it('should validate a package properly', function () {
    const obj = {
      'name': 'package',
      'version': '1.0.0',
      'dependencies': {
        'volkswagen': '^1.4.2'
      }
    };

    assert.equal(hoax._isValid(obj), true)
  });

  it('should validate a package properly', function () {
    const obj = {
      'name': 'package',
      'version': '1.0.0',
      'devDependencies': {
        'volkswagen': '^1.4.2'
      }
    };

    assert.equal(hoax._isValid(obj), true)
  });

  it('should validate a package properly', function () {
    const obj = {
      'name': 'package',
      'version': '1.0.0'
    };

    assert.equal(hoax._isValid(obj), false)
  });

  it('should parse an object to a package', function () {
    const obj = {
      'name': 'package',
      'version': '1.0.0',
      'dependencies': {
        'volkswagen': '^1.4.2'
      }
    };

    const p = {
      name: 'package',
      version: '1.0.0',
      yarn: 'yarn.pm/package',
      path: 'path'
    };

    assert.equal(JSON.stringify(hoax._parseObj(obj, 'path')), JSON.stringify(p))

  })
});