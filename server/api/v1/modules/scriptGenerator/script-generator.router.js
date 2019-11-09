const router = require('express').Router();
const scriptGenController = require('../scriptGenerator/script-generator.controller');

router.get('/features',(req,res)=>{
      
      scriptGenController.getAllfeatures((err,result)=>{
                if(err){
                   res.status(500).send({
                        success:false,msg: "Failed to fetched successfully",data: err
                   })
                } else{
                      res.status(200).send({
                        success:true,msg: "fetched successfully",data: result
                      })
                }
      });
      // res.status(200).send({success:true,msg: "fetched successfully",data: ["ADD COULMN","FEED CONF"]});
});


module.exports = router;