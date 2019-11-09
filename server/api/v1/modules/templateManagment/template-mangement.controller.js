const templateService = require('./template-mangement.service');


function getAllTemplates(done){    
   templateService.getAllTemplatesfromDB((err,result)=>{
        if(err){
            return done(err,null);
        } else{
            return done(null,result);
        }
   });
}
function saveTemplate(templateDetails,done){
  templateService.saveTemplateInDB(templateDetails,(err,result)=>{
    if(err){
        return done(err,null);
    } else{
        return done(null,result);
    } 
  });
}
function deleteTemplate(templateId,done){
    templateService.deleteTemplate(templateId,(err,result)=>{
        if(err){
            return done(err,null);
        } else{
            return done(null,result);
        }
   })
}
module.exports = {
    getAllTemplates,
    saveTemplate,
    deleteTemplate
}