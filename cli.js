#!/usr/bin/env node

'use strict';

// CLI: Customer Loyalty Index

const figlet = require('figlet');
const hoax   = require('hoaxwagen');

const p = hoax.getPackages();

if (p.length === 0) {
  console.log('✅ Clean!');
} else {
  figlet("IT SUCKS", (err, data) => { // it does...
    console.log("\nWell, I've got bad news for you...\n");
    console.log('\x1b[31m%s\x1b[0m\n', data);

    p.forEach((p, i) => console.log(`${i+1}. ${p.name} @ ${p.version} (${p.yarn}) in ${p.path}`));
    console.log();
  });
}