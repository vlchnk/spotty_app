const sampleCommandCallback = async ({ req, logger }) => {
  const { ack, respond } = req;
  try {
    await ack();
    await respond('Responding to the sample command!');
  } catch (error) {
    logger.error(error);
  }
};

module.exports = { sampleCommandCallback };
