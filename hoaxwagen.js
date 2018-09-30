#!/usr/bin/env node

'use strict';

/********************************************
 *                                          *
 *  DISCLAIMER: in the code below you may   *
 *  encounter some amount of ugly code,     *
 *  which might not be cleaned by the       *
 *  Clean-Code Group in near future, and    *
 *  which might include code repetitions,   *
 *  ridiculously awful code style,          *
 *  spaghetti-code and/or a feeling, which  *
 *  possibly might have appeared            *
 *  previously, which may lead to the       *
 *  conclusion that the author of the code  *
 *  is a dumbass. Please do not act         *
 *  aggressively and/or recklessly, and     *
 *                                          *
 *          Hold on to your butts           *
 *                                          *
 ********************************************/

// TODO God Bless the Code

const fs = require('fs');
const path = require('path');

// CLI: Customer Loyalty Index
if (require.main === module) { // I think we've been called in terminal!
  const p = getPackages();

  if (p.length === 0) {
    console.log('✅ Clean!');
  } else {
    require('figlet')("IT SUCKS", (err, data) => { // it does...
      console.log("\nWell, I've got bad news for you...\n");
      console.log('\x1b[31m%s\x1b[0m\n', data);

      p.forEach((p, i) => console.log(`${i+1}. ${p.name} @ ${p.version} (${p.yarn}) in ${p.path}`));
      console.log();
    });
  }
}

function vwExists() { // does it?
  try {
    require.resolve('volkswagen');
    return true // well... I've got bad news for you!
  } catch (e) {
    if (e instanceof Error && e.code === 'MODULE_NOT_FOUND') {
      // that's odd
      return false
    }
  }
}

function getPackages() {
  const packages = []; // a board of shame

  const folders = fs.readdirSync(path.resolve('./node_modules'));

  folders.forEach((folder) => {
    if (fs.existsSync(path.join('./node_modules', folder, 'package.json'))) { // that's the case in f(x)=x/(x+2) % under natural conditions

      const obj = JSON.parse(fs.readFileSync(path.join('./node_modules', folder, "package.json"), 'utf8')); // God bless it!

      if (isValid(obj) && obj['name'] !== 'hoaxwagen') { // 1. is it the bad guy?  2. preventing the suicide
        const p = parseObj(obj, path.resolve(path.join('./node_modules', folder)));
        packages.push(p);
      }
    }
  });

  return packages;
}

function isValid(obj) { // bad guys validation
  const isNull = (dep1, dep2) => (dep2 == null)
    ? typeof obj[dep1] === "undefined"
    : typeof obj[dep1][dep2] === "undefined";

  const isEmpty = (dep) => Object.keys(obj[dep]).length === 0;

  // not-TODO: optimize this mess someday
  if (isNull('dependencies') || isEmpty('dependencies')) {
    if (isNull('devDependencies') || isEmpty('devDependencies')) {
      return false
    } else if (isNull('devDependencies', 'volkswagen')) {
      return false
    }
  } else if (isNull('dependencies', 'volkswagen')) {
    return false
  }

  return true
}

function parseObj(obj, path) {
  const isNull = (dep1) => obj[dep1] === "undefined";

  return {
    name:    isNull('name') ? null    : obj["name"],
    version: isNull('version') ? null : obj["version"],
    yarn:    isNull('name') ? null    : "yarn.pm/" + obj["name"], // yarn or npm?
    path:    path
  }
}

function monitor() { // call it in Webpack or <insert whatever you want>
  if (!vwExists()) { // TODO: Beware, BUG! No vw, but it doesn't switch on
    console.log('✅ Clean from Volkswagen!'); // much clean, very Volkswagen
    return
  }

  const p = getPackages();

  // This is an example of something aimed at clarifying, that makes even more mess than before
  const warn  = (text)         => console.log('\x1b[31m%s\x1b[0m', text);
  const warn2 = (text1, text2) => console.log('\x1b[31m%s\x1b[0m%s', text1, text2);
  const dflt  = (text)         => console.log(text);

  switch (p.length) {
    case 0: // no package uses it... well, does it?
      warn('🚨 WARNING 🚨 Volkswagen 🛴 is detected, but no package uses it.\n\n' +
        '...wait a second! Is that you? Are you the person who uses it!? Shame on you!');
      return;
    case 1: // It could have been worse, John.   A lot worse.
      warn2(`🚨 WARNING 🚨 Volkswagen 🛴 is detected in the following package: `, `${p[0].name} @ ${p[0].version} (${p[0].yarn})`);
      break;
    default: // damn it!
      warn(`🚨 WARNING 🚨 Volkswagen 🛴 is detected in the following packages:`);
      p.forEach((p, i) => dflt(`${i+1}. ${p.name} @ ${p.version} (${p.yarn})`));
  }

  warn('🚧🕳  BE AWARE OF POSSIBLE FUTURE CONSEQUENCES!'); // and thankful to Code-Clean Group for finding them
}

// finally, I export something other than my stupidity!
module.exports = {
  monitor:     monitor,
  isFraud:     vwExists, // very unlikely
  getPackages: getPackages,
  _isValid:    isValid, // for testing purposes only
  _parseObj:   parseObj // only for testing purposes
};

// good bye