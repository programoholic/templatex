// grab the things we need
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const config = require('./appconfig/appconfig');
const { connectionString } = config;
// const userSchema =  require('./core/models/user');
// console.log('user Schema',userSchema);
mongoose.connect(connectionString.contact+''+connectionString.port+'/'+connectionString.keyspace);
// get reference to database
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("Connection Successful!");
    db.dropDatabase((err,success)=>{
        if(err){
            console.log('err ocuured',err);
            releaseDB();
        }
       else{
           console.log('delete sucessfull',success);
           createDB();
       } 
    });
    // db.dropCollection('users',(err,success)=>{
    //     if(err){
    //         console.log('error occured',err);
    //         releaseDB();
    //     } else{
    //         console.log('delete successfull');            
    //         createDB();
    //     }
    // })   
});
function templateDetails(){
    const templateSchema =  new Schema({
        name : {type: String, required: true},
        description : { type:String , required :true},
        created_at : Date,
        updated_by : String,
        scriptFileName : String,
        scriptFileContent : Buffer,
        templateFileName : String,
        templateFileContent : Buffer,
        activeFlag : Boolean,
    });
    
    const Template = mongoose.model('Template',templateSchema);
    const template1 = new Template({
        name : "sample Files",
        description :"this is the default entry in the collection to create it",
        created_at : new Date(),
        updated_by : "MYRIAD_OWNER",
        scriptFileName : "sample_file.txt",
        scriptFileContent : [1,2,3,4,5],
        templateFileName : "sample_file.xlsx",
        templateFileContent : [1,2,3,4],
        activeFlag : false, 
    });
    template1.save((err,template)=>{
        if(err){
            console.log('err is ',err);
            releaseDB();
        } else{
            console.log('success ',template);
            releaseDB();            
        }
    })

}
function createDB(){
// creating a schema
const userSchema = new Schema({
    name: String,
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    admin: Boolean,
    location: String,
    meta: {type:String},
    created_at: Date,
    updated_at: Date
  });
  
  // we need to create a model using it
  const User = mongoose.model('User', userSchema);
   
    // a document instance
    var user1 = new User({ 
        name: 'Myriad owner',
        username: 'myriad_owner',
        password: 'root@123',
        admin: true,
        location: 'India',
        meta: 'OS: MAC , SERVER:  EXPRESS',
        created_at: new Date(),
        updated_at: new Date() });
 
    // save model to database
    user1.save(function (err, user) {
      if (err){  
          console.error(err);
          releaseDB();
        }
      else{
      console.log(user+ " saved to users collection.");
      templateDetails();
    //   releaseDB();
      }
    });
}
function releaseDB(){
db.close((err,succcess)=>{
     if(err) console.log('failed to close');
     else console.log('closed successfully');
})
}

// make this available to our users in our Node applications
// module.exports = User;