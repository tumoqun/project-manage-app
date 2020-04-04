const express=require('express');
const mongoose=require('mongoose');
const  Project =require('../Model/Project');
const route=express.Router();

route.get('/',async(req,res)=>{
    Project.find()
    .then(projectlist=>res.json(projectlist))
    .catch(err=>res.status(400).json('Error:'+err));
})

route.post('/add',async(req,res)=>{
    const{ Name, Description }=req.body;
    let project={};
    project.Name=Name;
    project.Description=Description;
    let projectModel=new Project(project);
    await projectModel.save();
    res.json(projectModel);
})

module.exports=route;