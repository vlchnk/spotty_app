const { App, LogLevel } = require('@slack/bolt');
const { config } = require('dotenv');
const Knex = require('knex');
const Spotify = require('spotify-api.js');
const { registerListeners } = require('./listeners');

const spotify = new Spotify.Client({ token: process.env.SPOTIFY_TOKEN });

config();

const knex = Knex({
  client: 'pg',
  version: '7.2',
  connection: {
    host: '127.0.0.1',
    port: 5432,
    user: 'your_database_user',
    password: 'your_database_password',
    database: 'myapp_test',
  },
});

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  socketMode: true,
  appToken: process.env.SLACK_APP_TOKEN,
  logLevel: LogLevel.DEBUG,
});

registerListeners(app, knex, spotify);

(async () => {
  try {
    await app.start(process.env.PORT || 3000);
    console.log('⚡️ Spotty app is running! ⚡️');
  } catch (error) {
    console.error('Unable to start App', error);
  }
})();
