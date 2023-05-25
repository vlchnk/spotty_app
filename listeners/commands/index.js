const { sampleCommandCallback } = require('./sample-command');

module.exports.register = (registry) => {
  registry.app.command('/sample-command', (req) => sampleCommandCallback({ ...registry, req }));
};
