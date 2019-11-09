const metaInfoSchema = {
    viewCount : Number,
    viewBy : { type:String , required :true},
    viewed_at : Date,
}
module.exports={metaInfoSchema};