//This registration schema is not for use but I 've got it here just in case that I will
//need It.

const mongoose = require("mongoose");

const regiSchema = mongoose.Schema({
	name: { type: String,required: true },
	last_name: { type: String,required: true },
	password: {type: String,required: true},
	Email:	{type: String,required: true},
	Number:	{type: String,required: true},
	Gender : {type: String,required: true}
});

const regi = mongoose.model("regi", regiSchema);

module.exports = regi;
