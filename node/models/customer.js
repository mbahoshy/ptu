var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var customerSchema = new mongoose.Schema({
	nameLast:   String,
	nameFirst:  String,
	email: String,
	address: {
		street: String,
		city: String,
		zip: String
	},
	billing: {
		street: String,
		city: String,
		zip: String
	},
	equipmentCounter: Number,
	equipment: []
	
});

customerSchema.statics.add = function(nameLast, nameFirst, email, street, city, zip) {
	customer.create  ({
		nameLast: nameLast,
		nameFirst: nameFirst,
		email: email,
		address: {
			street: street,
			city: city,
			zip: zip
		},
		equipmentCounter: 0,
		equipment: []
		
	}, function(err, cust){
		if(err) throw err;
		// if (err) return done(err);
		
	});
}

var customer = mongoose.model('customer', customerSchema, 'customers');
module.exports = customer;