const CryptoJS = require("crypto-js");
const loginService = require('./login.service');
function loginAsAdmin(authToekn,done){
    let bytes  = CryptoJS.AES.decrypt(authToekn.toString(), 'ANIS_WASE_2015_BATCH_MAVERICK');
    let plaintext = bytes.toString(CryptoJS.enc.Utf8);
    console.log('plain text is ',plaintext);
    let userArr = plaintext.split('|p|');
    let payload = {
        email : userArr[0].split(':')[1],
        password: userArr[1].split(':')[1]
    };
    console.log('user payload',payload);
    loginService.verifyAdminCred(payload,(err,result)=>{
          if(err){
              return done(err);
          } else{
              return done(null,result);
          }
    })
    
}

module.exports = {loginAsAdmin};