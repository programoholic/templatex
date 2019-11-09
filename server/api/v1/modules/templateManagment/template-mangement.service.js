const mongoose = require('mongoose');
const  Schema = mongoose.Schema;
const config = require('../../../../appconfig');
const { connectionString } = config;
const templateSchema = require('../../../../core/models/template').templateSchema;
const Template = mongoose.model('Template',templateSchema);
let db = null;

function getAllTemplatesfromDB(done){
    mongoose.connect(connectionString.contact+''+connectionString.port+'/'+connectionString.keyspace, {useNewUrlParser: true});        
    db = mongoose.connection;
    connectDB();  
 db.on('error',()=>{
    console.error.bind(console, 'connection error:');
    return done(err,null)
 }); 
 db.once('open',()=>{
     try{
        Template.find({},function(err,template){
            if(err){
                releaseDB();
                return done(err,null);
            } else{
                releaseDB();
               return done(null,template)
            }
        });
     } catch(err){
        return done(err,null);
     }
   
 });
    
}
function saveTemplateInDB(templateDetails,done){
   mongoose.connect(connectionString.contact+''+connectionString.port+'/'+connectionString.keyspace);    
    db = mongoose.connection;
    let templateObj =  new Template({
        name : templateDetails.name,
        description : templateDetails.description,//"this is the default entry in the collection to create it",
        created_at : new Date(),
        updated_by : "MYRIAD_OWNER",
        scriptFileName : templateDetails.scriptFileName,
        scriptFileContent : templateDetails.scriptFileContent,
        templateFileName : templateDetails.templateFileName,
        templateFileContent : templateDetails.templateFileContent,
        activeFlag : true,
    });
    console.log('update vlaue',templateObj);
    db.on('error',()=>{
        console.error.bind(console, 'connection error:');
        return done(err,null)
     }); 
     db.once('open',()=>{
        try{
            Template.create(templateObj,(err,result)=>{
                if(err){
                    releaseDB();
                    return done(err,null);
                } else{
                    releaseDB();
                    return done(null,result);
                }
          });
        } catch(error){
            return done(error,null);  
        } 
         
     });
}

function deleteTemplate(templateId,done){
    mongoose.connect(connectionString.contact+''+connectionString.port+'/'+connectionString.keyspace,{useNewUrlParser: true});    
    db = mongoose.connection;
    db.on('error',(err)=>{
        console.error.bind(console, 'connection error:');
        return(err,null);
    });
    db.once('open',()=>{
        try{
    Template.updateOne({_id:templateId},{$set:{activeFlag:false}},(err,result)=>{
        if(err){
            console.log('erorr is ',err);
            releaseDB();
            return done(err,null);
        } else{
            console.log('result is ',result);
            releaseDB();
            return done(null,result);
        }
    });
} catch(err){
    return done(err,null);
}
    })
}
function connectDB(){
   

}

function releaseDB(){
    db.close((err,succcess)=>{
         if(err) console.log('failed to close');
         else console.log('closed successfully');
    })
    }
module.exports = {
    getAllTemplatesfromDB,
    saveTemplateInDB,
    deleteTemplate
}