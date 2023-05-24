const { appHomeOpenedCallback } = require('./app-home-opened');

module.exports.register = (app, knex, spotify) => {
  app.event('app_home_opened', appHomeOpenedCallback.bind(this, knex, spotify));
};
