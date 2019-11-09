const templateService =  require('../templateManagment/template-mangement.service');

function getAllfeatures(done){
  templateService.getAllTemplatesfromDB((err,result)=>{
     
    if(err){
        return done(err,null);
    } else{
        console.log('data is ',result);
        let activeTemplates = result.filter((templ)=>{
            return templ.activeFlag === true;
        });
        return done(null,activeTemplates);
    }
  });
}

module.exports = {
    getAllfeatures  
}