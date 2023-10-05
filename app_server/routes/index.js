var express = require('express');
var router = express.Router();
var ctrlservices = require('../controllers/services'); // Replace with the correct file path
var ctrlOthers = require('../controllers/others');
var servicesControllers = require('../controllers/services');
var appointmentController = require('../controllers/appointment');

/* LOCATIONS.js */
router.get('/', ctrlservices.homelist);
/*OTHERS.js*/
router.get('/about',ctrlOthers.about);
// Handle appointment booking form submission
router.post('/book-appointment', appointmentController.bookAppointment);


module.exports = router;