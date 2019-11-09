// var mongoose = require('mongoose');
// var Schema = mongoose.Schema;

// const templateSchema =  new Schema({
//     name : {type: String, required: true,unique:true},
//     description : { type:String , required :true},
//     created_at : Date,
//     updated_by : String,
//     scriptFileName : String,
//     scriptFileContent : Buffer,
//     templateFileName : String,
//     templateFileContent : Buffer,
// });

const templateSchema = {
    name : {type: String, required: true,unique:true},
    description : { type:String , required :true},
    created_at : Date,
    updated_by : String,
    scriptFileName : String,
    scriptFileContent : String,
    templateFileName : String,
    templateFileContent : String,
    activeFlag : Boolean
}
module.exports={templateSchema};  
