const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    id:{
        type:'number',
        required: true
    },
    title:{
        type: 'string',
        required: true
    },
    price:{
        type : 'number',
        required: true
    },
    description:{
        type: 'string',
        required: true
    },
    category:{
        type: 'string',
        required: true
    },
    image:{
        type: 'string',
        required: true
    },
    sold:{
        type: 'boolean',
        required: true
    },
    dateOfSale:{
        type:Date,
        required: true
    }
});

module.exports =  mongoose.model("SalesData", dataSchema);
