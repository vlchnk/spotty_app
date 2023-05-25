const { sampleActionCallback } = require('./sample-action');

module.exports.register = (registry) => {
  registry.app.action('sample_action_id', (req) => sampleActionCallback({ ...registry, req }));
};
