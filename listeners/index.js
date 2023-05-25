const actions = require('./actions');
const commands = require('./commands');
const events = require('./events');
const messages = require('./messages');
const shortcuts = require('./shortcuts');
const views = require('./views');

module.exports.registerListeners = (registry) => {
  actions.register(registry);
  commands.register(registry);
  events.register(registry);
  messages.register(registry);
  shortcuts.register(registry);
  views.register(registry);
};
