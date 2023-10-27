const mongoose = require("mongoose");
const cowinSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    PhoneNumber:{
        type:Number,
        required:true
    },
    Age:{
        type:Number,
        required:true
    },
    Pin:{
        type:Number,
        required:true
    },
    AdharNumber:{
        type:Number,
        required:true
    },
    Password:{
        type:String,
        required:true
    }

});

const arogyasetuCollection = new mongoose.model("arogyasetuCollection",cowinSchema);
module.export=arogyasetuCollection;
