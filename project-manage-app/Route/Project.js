const express=require('express');
const mongoose=require('mongoose');
const  Project =require('../Model/Project');
const Member=require('../Model/Member');
const route=express.Router();

route.get('/',async(req,res)=>{
    Project.find()
    .then(projectlist=>res.json(projectlist))
    .catch(err=>res.status(400).json('Error:'+err));
})

route.post('/:projectid/add-member/:memberid',async(req,res)=>{
    let memberid=req.params.memberid;
    let projectid=req.params.projectid;
    const member = await Member.findById(memberid);
    const updateProject=await Project.findOneAndUpdate(projectid,{
        $set: {
            Member:member
        }
    },{new:true})
    res.json(updateProject);
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

route.get('/add-member/:id',async(req,res)=>{
    Member.find()
    .then(memberlist=>res.json(memberlist))
    .catch(err=>res.status(400).json('Error:'+err));
})

module.exports=route;