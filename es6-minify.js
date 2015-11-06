#!/usr/bin/env node

var fs = require('fs');
var parser = require('shift-parser');
var codegen = require('shift-codegen').default;

if (process.argv.length != 3) {
    console.log('es6-minify.js inputfile');
    process.exit(-1);
}

var inputfile = process.argv[2];
var source = fs.readFileSync(inputfile, 'utf-8');
var ast = parser.parseScript(source);
var output = codegen(ast);
console.log(output);
