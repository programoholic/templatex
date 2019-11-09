const log4js = require('log4js');

const config = require('./appconfig').loggerConfig;

log4js.configure(config);

const logger = log4js.getLogger('templatex');
logger.level = 'debug'; // default level is OFF - which means no logs at all.
logger.connectLogger = log4js.connectLogger(log4js.getLogger("http"), { level: 'auto' });
module.exports = logger;
