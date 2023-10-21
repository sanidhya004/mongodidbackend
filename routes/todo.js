var express = require('express');
var router = express.Router();
const todo=require('../model')

//get karna hai?
//ajao dikhadunga
router.get('/todo',function(req,res){
    todo.find().then(function(err,Todo){
        if(err){
             console.log(err);
             res.status(500).send(err)
        }
        res.status(200).json(Todo)
    })
})
//post karna hai?
//ajao dikhadunga
router.post('/publish',function(req,res,next){
    const newTodo= new todo(req.body);
    newTodo.save().then((err,todo)=>{
        if(err){
             console.log(err);
             res.status(500).send(err)
        }
        res.status(200).send(todo)
    })
})
//del karna hai?
//ajao dikhadunga
router.delete('/del/:id',function(req,res){
    try{
         todo.deleteOne({_id:req.params.id}) .then((data) => {
            res.status(200).json({ status: true, data: data });
          })
          .catch((err) => {
            console.log(err);
            res.status(500).json({ status: false, data: {} });
          });
      
    }
    catch(err){
         res.status(500).send(err)
    }
})
//update karna hai?
//ajao dikhadunga
router.patch('/update/:id',function(req,res){
    todo.findOneAndUpdate({_id:req.params.id},req.body,{new:true}).then((data)=>{
        res.status(200).json({status:true,data:data})
    })
    .catch((err)=>{
        res.status(500).send(err)
    })
})


module.exports=router