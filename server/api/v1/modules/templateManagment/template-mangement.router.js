const express = require('express');
const router =  express.Router();
const templtCtrl = require('./template-mangement.controller');

router.get('/templates',(req,res)=>{
    console.log('step 1 --- ',req.headers);
      templtCtrl.getAllTemplates((err,result)=>{
          if(err){
            return res.status(500).json({
              success : false, msg : "Internal server error"
            });
          } else{
            return res.status(200).json({
              success : true,
              data : result
            });
          }
      })
});
router.post('/templates/add',(req,res)=>{
    let templateDetails = req.body;
    templtCtrl.saveTemplate(templateDetails,(err,result)=>{
      if(err){
        return res.status(500).json({
          success : false, msg : "Internal server error"
        });
      } else{
        return res.status(200).json({
          success : true,
          msg : "Data Inserted successfully",
          data : result
        });
      } 
    })     

});
router.delete('/templates/delete/:id',(req,res)=>{
         let templateId = req.params.id;
         console.log('req.body',templateId);
         templtCtrl.deleteTemplate(templateId,(err,result)=>{
           if(err){
             res.status(500).send({
              success:false,msg : ' Internal Server error. Failed to  Deleted Temaple'
             });
           } else{
            res.status(200).send({success:true,msg : 'Templated Deleted Successfully',data : result});
           }
         })
});
module.exports = router;