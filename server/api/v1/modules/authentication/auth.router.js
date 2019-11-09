const express = require('express');
const router = express.Router();
const authCtrl = require('./auth.controller');
const config = require('../../../../appconfig/appconfig');
const { cookieInfo } = config;

router.use('/',(req, res, next) => {        // eslint-disable-line consistent-return
  try {
    console.log(cookieInfo.admin);
    const token = req.cookies[cookieInfo.admin];
    if (token) {
      authCtrl.verifyToken(token, (err, decoded) => {
        if (err) {
          res.clearCookie(cookieInfo.admin);
          res.status(401).json({ error: ' Session Timeout... Please login again' });
        } else {
          req.user = decoded;
          next();
        }
      });
    } else {
           // if there is no token
           // return an error
      return res.status(403).send({
        message: 'User not authenticated.',
      });
    }
  } catch (error) {
   // console.log(error);
    return res.status(500).send({
      message : 'Internal Server occured..Try Again later'
    })
  }
});

module.exports = router;