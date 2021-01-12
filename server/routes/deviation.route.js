//console.log("routes.js");
const deviationController = require('../controllers/deviation.controller.js');

module.exports = function (app) {
    app.get('/api/deviations', deviationController.findAll);
    app.post('/api/deviations', deviationController.create);
    app.get('/api/deviations/:id', deviationController.findOne);
    app.put('/api/deviations/:id', deviationController.update);
    app.delete('/api/deviations/:deviation_id', deviationController.findAll);
}