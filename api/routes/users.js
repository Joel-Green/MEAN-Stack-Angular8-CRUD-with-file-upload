const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const User = require('../models/userSchema');

mongoose.set('userFindAndModify', false);


router.get('/',(req,res,next)=>{
    User.find((err,users)=>{
        err ? console.log(err) : res.json(users);
    })
})

router.post('/add',(req,res,next)=>{
    let UserIn = new User({
        _id : new mongoose.Types.ObjectId(),
        name:req.body.name
    });
    UserIn.save()
    .then(result=>console.log(result))
    .catch(err=>console.log(err));

})

router.get('/delete/:id',(req,res,next)=>{
    const id = req.params.id;


    User.findByIdAndRemove(_id = id , (err,users) =>{
        if(err)
        res.json(err)
        else 
        res.json('Sucessfully removes')
    } )

})

router.get('/update/get/:id',(req,res,next)=>{
    const id =req.params.id;

    User.findOne({_id : id }, (err,obj)=>{
        if(err) {
        console.log(err)
     } 
     else{
    console.log(obj);
    res.json(obj);
     } 
            
    });
});

router.post('/update/:id',(req,res,next)=>{
    const id = req.params.id;
    let UserUpdate = {
        _id :id,
        name : req.body.name
    };
    User.findOneAndUpdate({_id:id}, UserUpdate)
    .then(result=>{console.log(result);
        res.json(result);
    })
    .catch(err=>console.log(err));
})

module.exports=router;