// const kafka = require('kafka-node'); // configs for kafka consumer

// const { Client } = kafka;

// const client = new Client( (process.env.ZOOKEEPER_HOST || 'localhost') + ':2181');

const kafkaConfig = {
  ZOOKEEPER_HOST: (process.env.ZOOKEEPER_HOST || 'localhost'),
  ZOOKEEPER_CLIENT_URL: ( (process.env.ZOOKEEPER_HOST || 'localhost') + ':2181')
}

const options = {
  autoCommit: true,
  fetchMaxWaitMs: 1000,
  fetchMaxBytes: 1024 * 1024,
};

const consumeroptions = {
  groupId: 'ToolEvent',
  autoCommit: true,
  fetchMaxWaitMs: 1000,
  fetchMaxBytes: 1024 * 1024,
};

const connectionString = { // config for cassandra
  keyspace: 'templatexDB',
  contact: (process.env.MONGODB_HOST || 'mongodb://localhost:'),
  port: '27017',
};

const redis = {
  host: process.env.REDIS_HOST || '127.0.0.1',
  port: process.env.REDIS_PORT || 6379,
};
const loggerConfig = { // config for log4js
  // appenders: [{
  //   type: 'console',
  // }, {
  //   type: 'file',
  //   filename: './../logs/logger.log',
  //   category: 'communities',
  // }],
  // appenders: {
  //   fileLog: { type: 'file', filename: './../logs/logger.log' },
  //   console: { type: 'log4js-protractor-appender' }
  //   },
  //   categories: {
  //   file: { appenders: ['fileLog'], level: 'error' },
  //   another: { appenders: ['console'], level: 'trace' },
  //   default: { appenders: ['console', 'fileLog'], level: 'trace' }
  //   }
  "appenders": {
    "access": {
      "type": "dateFile",
      "filename": "log/access.log",
      "pattern": "-yyyy-MM-dd",
      "category": "http"
    },
    "app": {
      "type": "file",
      "filename": "log/app.log",
      "maxLogSize": 10485760,
      "numBackups": 3
    },
    "errorFile": {
      "type": "file",
      "filename": "log/errors.log"
    },
    "errors": {
      "type": "logLevelFilter",
      "level": "ERROR",
      "appender": "errorFile"
    }
  },
  "categories": {
    "default": { "appenders": [ "app", "errors" ], "level": "DEBUG" },
    "http": { "appenders": [ "access"], "level": "DEBUG" }
  }
};

const jwtdetails = {
  secret: 'templatex@wipcs',
  expiryTime: 60 * 500,
};


const events = {
  addmember: 'newmembersadded',
  addtool: 'newtoolsadded',
  addcommunity: 'newcommunityadded',
};
const cookieInfo = {
  admin : 'isUserAdmin'
}

module.exports = {
  connectionString,
  events,
  loggerConfig,
  options,
  consumeroptions,
  //client,
  jwtdetails,
  redis,
  kafkaConfig,
  cookieInfo
};

