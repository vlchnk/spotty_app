const { App, LogLevel } = require('@slack/bolt');
const { config } = require('dotenv');
const Knex = require('knex');
const Spotify = require('spotify-api.js');
const winston = require('winston');
const { registerListeners } = require('./listeners');

config();

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'spotty' },
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});

const spotify = new Spotify.Client({ token: process.env.SPOTIFY_TOKEN });

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

registerListeners({ app, knex, spotify, logger });

(async () => {
  try {
    await app.start(process.env.PORT || 3000);
    logger.info('⚡️ Spotty app is running! ⚡️');
  } catch (error) {
    logger.error('Unable to start App', error);
  }
})();
