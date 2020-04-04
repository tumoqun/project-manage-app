const express=require('express');
const mongoose=require('mongoose');
const  Member =require('../Model/Member');
const route=express.Router();


route.post('/add',async(req,res)=>{
    const{ Name, Phone, Birthday }=req.body;
    let member={};
    member.Name=Name;
    member.Phone=Phone;
    member.Birthday=Birthday;
    let memberModel=new Member(member);
    await memberModel.save();
    res.json(memberModel);
})

module.exports=route;