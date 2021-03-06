var nopt = require('nopt');
var config = require('./task/config');
var knownOpts = {
  watch : Boolean,
  repo: String
};

var shortHands = {
  w : ['--watch'],
  r : ['--repo']
};

var _argv = nopt(knownOpts, shortHands, process.argv, 2);

try {
  delete _argv.argv;
} catch (e) {
  
}

config.processOptions(_argv);

module.exports = {
  argv: _argv
}