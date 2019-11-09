const jwt = require('jsonwebtoken');
const config = require('../../../../appconfig');
const { jwtdetails } = config;

const verifyToken = (usertoken, done) => {
  jwt.verify(usertoken, jwtdetails.secret, (err, res) => {
    if (err) {
      return done(err);
    }
    return done(null, res);
  });
};

module.exports = {
  verifyToken,
};