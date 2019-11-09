const router = require('express').Router();
const config = require('../../appconfig/appconfig');
const { cookieInfo } = config;
router.use('/login', require('./modules/login'));

router.use('/logout', (req, res) => {
  console.log('logout called',cookieInfo);
  res.clearCookie(cookieInfo.admin);  
  res.redirect('/#/HOME/CS_LANDING_PAGE_E');  
});
router.use('/analytics',require('./modules/analytics'));
router.use('/scripts',require('./modules/scriptGenerator'));
// secure routes for admin
router.use(require('./modules/authentication'));
router.use('/manage',require('./modules/templateManagment'));

module.exports = router;