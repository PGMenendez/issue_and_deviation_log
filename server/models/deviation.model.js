const mongoose = require('mongoose');

const deviationSchema = new mongoose.Schema({

	name: {
		type: String,
		required: [false, "Project needs a name"],
		minLength: [3, "name must be longer than 3 characters"]
	},
	phase: {
		type: String,
		required: [true, "phase needs to be specified"],
		minLength: [3, "phase must be longer than 3 characters"]
	},
	issue: {
		type: String,
		required: [true, "deviation needs an indicated issue"],
		minLength: [3, "Indicated Issue must be longer than 3 characters"]
	},
	date: {
		type: Date,
		required: [true, "deviation needs a date"]
	},
	bomError: {
		type: Boolean,
		required: [false, "indicate if BOM error occured"]
	},
	job: {
		type: String,
		required: [true, "deviation needs a job name"],
		minLength: [2, "job name must be longer than 2 characters"]
	},
	drawing: {
		type: String,
		
	},
	part: {
		type: String,
		
	},
	impact: {
		type: String,
		required: [true, "impact must be logged"],
		minLength: [3, "impact must be longer than 3 characters"]
	},
	laborHours: {
		type: String,
		required: [true, "deviation needs labor hours"],
		minLength: [1, "hours must be longer than 1 character"]
	},
	burdenedLabor: {
		type: String,
		required: [false, "Project needs a name"],
		minLength: [1, "name must be longer than 1 character"]
	},
	notes: {
		type: String,
		
	},
	serial: {
		type: String,
    },

}, { timestamps: true });

module.exports = mongoose.model('deviation', deviationSchema);