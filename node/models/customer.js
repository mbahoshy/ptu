 mongoose = require('mongoose');

var Schema = mongoose.Schema;


var customerSchema = new mongoose.Schema({
	nameLast:   String,
	nameFirst:  String,
	email: String,
	address: String,
	city: String,
	zip: String
});

customerSchema.create = function(nameLast, nameFirst, email, address, city, zip) {
	customer.create  ({
		nameLast: nameLast,
		nameFirst: nameFirst,
		email: email,
		address: address,
		city: city,
		zip: zip,
	})
}

var customer = mongoose.model('customer', customerSchema, 'customer');
module.exports = customer;