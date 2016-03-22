var express = require('express'),
	router = express.Router();
	Mailchimp = require('../chimp.js'),
	config = require('../config.js');

// variables for mailchip call function
var mailchimp = new Mailchimp(config.api_key);

var callback = function (err, result) {
	if (err) {
		console.log('error', err);
	}
		console.log(result);
		process.exit(0);
}



/* On incoming POST request with new subscriber info. */
router.post('/', function(req, res, next) {

	// console.log("email = " + req.body.email_address);
	// console.log("first name = " + req.body.first_name);
	// console.log("last name = " + req.body.last_name);

	var subscribe_new = {
	  method : 'post',
	  path : '/lists/' + config.my_list_id + '/members/',
	  body : {
	    "email_address": req.body.email_address,
	    "status": "subscribed",
	    "merge_fields": {
	        "FNAME": req.body.first_name,
	        "LNAME": req.body.last_name
	    }
	  }
	}

	// make call to MailChimp with form data
	mailchimp.request(subscribe_new, callback)

	// sending back JSON message to client side
	res.send(req.body);

});

module.exports = router;

