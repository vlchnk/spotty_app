const clearPleylist = require('./jobs/clear-playlist');

module.exports.registerCron = (registry) => {
  clearPleylist.register(registry);
};
