const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const testSchema = new Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    phone:{
        type: String,
    },
    date: {
        type: String
    }

})

module.exports = mongoose.model("tests", testSchema);