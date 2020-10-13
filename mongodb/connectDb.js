const mongoose = require('mongoose');

const connectDb = async ()=>{
    try {
        await mongoose.connect('mongodb://localhost/todo-unit',{useNewUrlParser:true});
        
    } catch (error) {
        console.error(error);   
    }
   
};


module.exports = connectDb;