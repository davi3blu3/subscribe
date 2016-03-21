var express = require('express'),
	router = express.Router();
	Mailchimp = require('../chimp.js');

// Remember to import these from config.js 
var api_key = 
	my_list_id = 

// variables for mailchip call function
var mailchimp = new Mailchimp(api_key);

var callback = function (err, result) {
	if (err) {
		console.log('error', err);
	}
		console.log(result);
		process.exit(0);
}

var subscribe_new = {
  method : 'post',
  path : '/lists/' + my_list_id + '/members/',
  body : {
    "email_address": "seventh@frommyapp.com",
    "status": "subscribed",
    "merge_fields": {
        "FNAME": "Seven",
        "LNAME": "From Client"
    }
  }
}



/* On incoming POST request with new subscriber info. */
router.post('/', function(req, res, next) {

	var subscriberData = 

	// console.log("Email type " + (typeof req.body.email_address));
	///console.log("FName = " + (typeof req.body.merge_fields));
	// console.log("LName = " + req.body.merge_fields[FNAME]);
	// console.log("Status = " + req.body.status);

	// mailchimp.request(subscribe_new, callback)

	// sending back JSON message to client side
	res.send(req.body);

});

module.exports = router;


/*
var Mailchimp = require('../index.js');


var api_key = '11b6ba4f77b8b5898be3e295f5797f6f-us13'
var my_list_id = '4794dc04d1';


var mailchimp = new Mailchimp(api_key);
// console.log(api_key);

var callback = function (err, result) {
  if (err) {
    console.log('error', err);
  }
  console.log(result);
  process.exit(0);
}

var subscribe_new = {
  method : 'post',
  path : '/lists/' + my_list_id + '/members/',
  body : {
    "email_address": "sweeny@todd.com",
    "status": "subscribed",
    "merge_fields": {
        "FNAME": "Textexample",
        "LNAME": "Fromyourbutt"
    }
  }
}

var status = {
  method : 'get',
  path : '/',
}

var get_lists = {
  method : 'get',
  path : '/lists',
}

var get_list_info = {
  method : 'get',
  path : '/lists/' + my_list_id
}

var get_list_info_path_params = {
  method : 'get',
  path : 'lists/{list_id}',
  path_params : {
    list_id : my_list_id
  }
}

// mailchimp.request(status, callback)
// mailchimp.request(get_lists, callback)
// mailchimp.request(get_list_info, callback)
// mailchimp.request(get_list_info_path_params, callback)
mailchimp.request(subscribe_new, callback)
*/