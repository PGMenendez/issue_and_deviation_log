const mongoose = require('mongoose');

const deviationSchema = new mongoose.Schema({


	phase: {
		type: String,
		required: [true, "phase needs to be specified"],
		minLength: [3, "phase must be specified"]
	},
	issue: {
		type: String,
		required: [true, "record needs an indicated issue"],
		minLength: [3, "record needs an indicated issue"]
	},
	date: {
		type: Date,
		required: [true, "record needs a date"]
	},
	job: {
		type: String,
		required: [true, "deviation needs a job designation"],
		minLength: [2, "job name must be longer than 2 characters"]
	},
	impact: {
		type: String,
		required: [true, "impact must be logged"],
		minLength: [3, "impact must be logged"]
	},
	laborHours: {
		type: String,
		required: [true, "record needs labor hours"],
		minLength: [1, "hours must be logged to the record"]
	},
	drawing: {
		type: String,

	},
	part: {
		type: String,

	},
	notes: {
		type: String,
		
	},
	serial: {
		type: String,
    },

}, { timestamps: true });

module.exports = mongoose.model('deviation', deviationSchema);