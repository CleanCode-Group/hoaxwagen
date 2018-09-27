'use strict'

function vwExists() {
  try {
    require.resolve('volkswagen');
    return true
  } catch (e) {
    if (e instanceof Error && e.code === 'MODULE_NOT_FOUND') {
      return false
    }
  }
}

function monitor() {
  if (vwExists()) {
    var warningText = '🚨 WARNING 🚨 SOME OF THE PROJECT DEPENDENCIES USE VOLKSWAGEN 🛴 (npm.im/volkswagen) TO FRAUD THE TESTS! ' +
      'BE AWARE OF POSSIBLE FUTURE CONSEQUENCES! 🚧🕳';

    console.log('\x1b[31m%s\x1b[0m', warningText); // red hot
  }
}

module.exports = {
  check: vwExists,
  monitor: monitor
};