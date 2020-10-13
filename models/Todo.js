const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    done:{
        type:Boolean,
      
    }
});


module.exports = mongoose.model("Todo",TodoSchema);