//This address schema is not for use but I 've got it here just in case that I will
//need It.

const mongoose = require("mongoose");

const addressSchema = mongoose.Schema({
	Address:{ type: String,required: true },
	Code:{ type: Number,required: true },
	City:	{ type: String,required: true },
	Country:{ type: String,required: true }
});

const address = mongoose.model("address", addressSchema);

module.exports = address;