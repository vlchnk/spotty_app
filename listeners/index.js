const actions = require('./actions');
const commands = require('./commands');
const events = require('./events');
const messages = require('./messages');
const shortcuts = require('./shortcuts');
const views = require('./views');

module.exports.registerListeners = (app, knex, spotify) => {
  actions.register(app, knex, spotify);
  commands.register(app, knex, spotify);
  events.register(app, knex, spotify);
  messages.register(app, knex, spotify);
  shortcuts.register(app, knex, spotify);
  views.register(app, knex, spotify);
};
