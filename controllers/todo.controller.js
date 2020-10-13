const { create } = require('../models/Todo');
const TodoModel = require('../models/Todo');
exports.createTodo=async (req,res,next)=>{
    const createdModel=await TodoModel.create(req.body);
    res.status(201).json(createdModel);
};