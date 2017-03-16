//This registration schema is not for use but I 've got it here just in case that I will
//need It.

var mongoose = require("mongoose");

var regiSchema = mongoose.Schema({
	name: { type: String,required: true },
	password: {type: String,required: true}	
});

var regi = mongoose.model("regi", regiSchema);

module.exports = regi;
