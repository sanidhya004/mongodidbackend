const mongoose=require('mongoose')

const Schema= mongoose.Schema


const todoSchema= new Schema({
     text:{
         type:String,
         required:true
     },
     status:{
         type:Boolean,
         required:true
     },
     createdOn:{
         type:Date,
         default:Date.now
     }
})


module.exports=mongoose.model("todo",todoSchema)