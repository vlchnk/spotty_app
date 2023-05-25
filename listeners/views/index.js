const { sampleViewCallback } = require('./sample-view');

module.exports.register = (registry) => {
  registry.app.view('sample_view_id', (req) => sampleViewCallback({ ...registry, req }));
};
