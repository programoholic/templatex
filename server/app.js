const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const fs = require('fs');
const app = express();
const clientPath = path.resolve(__dirname, '..', 'dist');
const connection =  require('./appconfig');
const logger = require('./logger');
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(clientPath));
app.use(cookieParser());
process.stdout.write('Initializing Templatex server ');
// require('./dbcreation');

function welcome() {
  const motdFile = path.resolve(__dirname, '.webapp.motd');
  if (fs.existsSync(motdFile)) {
    const msg = fs.readFileSync(motdFile, 'utf-8');
    process.stdout.write(`\n${msg}\n`);
  } else {
    process.stdout.write('\n=========== Templatex WWW ===========\n');
  }
}
welcome();

// middleware function
app.use('/api/v1', require('./api/v1/'));
app.use(logger,(req,res,next)=>{
  next();
});
app.use((req, res) => {
  res.status(404).send({ error: 'Resource not found' });
});
logger.debug('app started finally');
module.exports = app;
