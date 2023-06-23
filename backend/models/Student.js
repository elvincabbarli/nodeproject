const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let studentSchema = new Schema({
	name: {
		type: String,
		required: true,
		unique: [true , 'Name must be Unique']
	},
	email: {
		type: String,
		required: true,
		unique: [true , 'Name must be Unique']
	},
	rollno: {
		type: Number,
		unique: [true , 'Name must be Unique']
	}
}, {
	collection: 'students'
})

module.exports = mongoose.model('Student', studentSchema)
