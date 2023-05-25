const { appHomeOpenedCallback } = require('./app-home-opened');

module.exports.register = (registry) => {
  registry.app.event('app_home_opened', (context) => appHomeOpenedCallback({ ...registry, context }));
};
