const express = require('express');
const loginCtrl = require('./login.controller');
const config = require('../../../../appconfig');
const { cookieInfo } = config;
const router = express.Router();

router.post('/admin',(req, res) => {
    loginCtrl.loginAsAdmin(req.headers.logtoken,(err,result)=>{
        if(err){
            return res.status(500).json({ error:'internal server error.. try after sometime'});
        } else{
                if(result.success){
                    res.cookie(cookieInfo.admin,result.token);
                    return res.status(200).json(result);
                } else{
                    return res.status(200).json(result);
                }
            
        }
    })
    // res.status(200).json('done');
});
module.exports = router;