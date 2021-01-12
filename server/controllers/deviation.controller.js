const deviation = require('../models/deviation.model');
console.log('controller accessed');
module.exports = {
    findAll: (req, res) => {
        deviation.find().sort('name')
            .then((allDeviation) => res.json(allDeviation))
            .catch((err) => res.json({ message: "An error has happened in findAll.", error: err }));
    },
    findOne: (req, res) => {
        deviation.findById(req.params.id)
            .then((deviation) => res.json(deviation))
            .catch((err) => res.json({ message: "An error has happened in find one.", error: err }));
    },
    create: (req, res) => {
        console.log(req.body);
        deviation.create(req.body)
            .then((newDeviation) => res.json(newDeviation))
            .catch((err) => res.json({ message: "An error has happened in create.", error: err }));
    },
    update: (req, res) => {
        deviation.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        })
            .then((updatedDeviation) => res.json(updatedDeviation))
            .catch((err) => res.json({ message: "An error has happened in update.", error: err }));
    },
    delete: (req, res) => {
        console.log(req.params.deviation_id);
        deviation.findByIdAndDelete(req.params.pirate_id)
            .then((successMsg) => res.json(successMsg))
            .catch((err) => res.json({ message: "An error has happened in delete.", error: err }));
    },
}