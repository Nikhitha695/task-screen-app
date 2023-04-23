const TaskScreenModel = require('../models/TaskScreenModel');

module.exports.getTask = async (req, res) => {
    const task = await TaskScreenModel.find()
    res.send(task)
}

module.exports.saveTask = async (req, res)=>{
    const { text } = req.body
    TaskScreenModel
        .create({ text })
        .then((data)=>{
            console.log("Added Successfully...");
            console.log(data);
            res.send(data)
        })
}

module.exports.updateTask = async(req,res)=>{
    const {_id,text} =req.body
    TaskScreenModel
    .findByIdAndUpdate(_id,{text})
    .then(() => {
       res.send("Updated Successfully..");
    })
    .catch((err)=>console.log(err));
}

module.exports.deleteTask = async(req,res)=>{
    const {_id} =req.body
    TaskScreenModel
    .findByIdAndDelete(_id)
    .then(() => {
       res.send("Deleted Successfully..");
    })
    .catch((err)=>console.log(err));
}