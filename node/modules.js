var customer = require('../node/models/customer');

function newCustomer (req, res) {
	var nameFirst = req.param("nameFirst"),
		nameLast = req.param("nameLast"),
		email = req.param("email"),
		street = req.param("street"),
		city = req.param("city"),
		zip = req.param("zip");

	customer.add(nameFirst, nameLast, email, street, city, zip);

	console.log(nameFirst);
	res.json({'success':true});

}

function returnCustomers (req, res) {
	customer.find({}, '', function(err, data) {
		res.json(data);
	});
}


exports.newCustomer = newCustomer;
exports.returnCustomers = returnCustomers;