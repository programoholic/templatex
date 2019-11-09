const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const  Schema = mongoose.Schema;
const userSchema = require('../../../../core/models/user');
const config = require('../../../../appconfig');
const { connectionString } = config;
const { jwtdetails } = config;

const User = mongoose.model('User',userSchema);


function verifyAdminCred(payload,done){
 mongoose.connect(connectionString.contact+''+connectionString.port+'/'+connectionString.keyspace);
 const db = mongoose.connection;
 db.on('error', console.error.bind(console, 'connection error:'));
 db.once('open', function() {
    console.log("Connection Successful!",payload);
    User.findOne ({ username: payload.email }, function (err, user) {
        if (err) {console.log (err); return  done(err,null);}
        if (!user) {console.log ('user not found'); return done(null,{message: 'User doesn\'t exists!',success :false})}
        console.log('find user ======',user.toJSON());
        let userData = user.toJSON();
        console.log(' user  ======',payload.password);
        console.log('compare ',user.password == payload.password);

       /* user.comparePassword(payload.password,function(err,result){
            if(err){
                console.log('compare unscuss');
                return done(null,{message: 'Invalid credentials!!!',success :false});
            } else{
                console.log('compare cuss');
                let userDetails = {
                    name : user.name,
                    location : user.location,
                    id : user._id
                };
                let userToken = jwt.sign(userDetails, jwtdetails.secret, {
                    expiresIn: jwtdetails.expireTime
                });
                return done(null,{
                    msg : 'User found',
                    success : true,
                    token : userToken
                }
                );
            }
        }); */
        if(userData.password == payload.password){
            console.log('compare cuss',typeof jwtdetails.expiryTime);
            let userDetails = {
                name : user.name,
                location : user.location,
                id : user._id
            };
            let userToken = jwt.sign(userDetails, jwtdetails.secret, {
                expiresIn: 3000
            });
            return done(null,{
                msg : 'User found',
                success : true,
                token : userToken
            }
            );
        } else {
            console.log('compare unscuss');
            return done(null,{message: 'Invalid credentials!!!',success :false});
        }  
      });
});

}
function releaseDB(){
    db.close((err,succcess)=>{
         if(err) console.log('failed to close');
         else console.log('closed successfully');
    })
    }
module.exports = {verifyAdminCred};