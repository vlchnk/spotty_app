const job = async ({ logger, spotify, knex }) => {

};

module.exports.register = ({ CronJob, logger, spotify, knex }) => {
  new CronJob(
    '00 00 05 * * *', // every morning 05:00 AM
    async () => job({ logger, spotify, knex }),
    null,
    true,
    'Europe/Nicosia',
  ).start();
};
