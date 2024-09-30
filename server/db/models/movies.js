const mongoose = require('mongoose');

const users = new mongoose.Schema({
    title : {
        type : String,
        required : true,
    },
    released : {
        type : String,
        required : true,
    },
    category : {
        type : String,
        required : true,
    },
    rating : {
        type : Number,
        required : true,
    },
    image : {
        type : String,
    },
    language : {
        type : String,
        required : true,
    }
});

 let add= mongoose.model("users", users);
 module.exports = add