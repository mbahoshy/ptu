var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var customerSchema = new mongoose.Schema({
	nameLast:   String,
	nameFirst:  String,
	email: String,
	address: String,
	city: String,
	zip: String
});

customerSchema.statics.add = function(nameLast, nameFirst, email, address, city, zip) {
	console.log('fuck');
	customer.create  ({
		nameLast: nameLast,
		nameFirst: nameFirst,
		email: email,
		address: address,
		city: city,
		zip: zip,
	}, function(err, cust){
		if(err) throw err;
		// if (err) return done(err);
		
	});
}

var customer = mongoose.model('customer', customerSchema, 'customers');
module.exports = customer;