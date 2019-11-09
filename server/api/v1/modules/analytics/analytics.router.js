const express = require('express');
const router =  express.Router();

router.get('/metainfo',(req,res)=>{

   res.status(200).json({
       success: true,
       message : 'result fetched successfully',
       data : {
         viewCount : 1005,
         featureCount: '20.8k',
         templCount:  '25.4k',
         scriptCount:'68.4k',
       }
   });
});

module.exports = router;