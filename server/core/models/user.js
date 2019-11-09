// var mongoose = require('mongoose');
// var Schema = mongoose.Schema;
// const userSchema = new Schema({
//     name: String,
//     username: { type: String, required: true, unique: true },
//     password: { type: String, required: true },
//     admin: Boolean,
//     location: String,
//     meta: {type:String},
//     created_at: Date,
//     updated_at: Date
//   });

const userSchema= {
   name: String,
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  admin: Boolean,
  location: String,
  meta: {type:String},
  created_at: Date,
  updated_at: Date
}
module.exports={userSchema};  