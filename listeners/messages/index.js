const { sampleMessageCallback } = require('./sample-message');

module.exports.register = (registry) => {
  registry.app.message(/^(hi|hello|hey).*/, (req) => sampleMessageCallback({ ...registry, req }));
};
