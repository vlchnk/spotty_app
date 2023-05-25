const { sampleShortcutCallback } = require('./sample-shortcut');

module.exports.register = (registry) => {
  registry.app.shortcut('sample_shortcut_id', (req) => sampleShortcutCallback({ ...registry, req }));
};
