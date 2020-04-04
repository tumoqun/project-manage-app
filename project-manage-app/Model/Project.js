const mongoose=require('mongoose');

const project=new mongoose.Schema({
    Name:{
        type:String,
    },
    Description:{
        type:String
    },
    Member:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Member'
    }
});

const Project=mongoose.model('project',project);
module.exports = Project 