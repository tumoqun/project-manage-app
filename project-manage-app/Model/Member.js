const mongoose=require('mongoose');

const member=new mongoose.Schema({
    Name:{
        type:String,
    },
    Phone:{
        type:Number
    },
    Birthday:{
        type:Date
    }
});

const Member=mongoose.model('member',member);
module.exports = Member;