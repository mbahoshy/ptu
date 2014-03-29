var customer = require('../node/models/customer');

function newCustomer (req, res) {
	var nameFirst = req.param("nameFirst"),
		nameLast = req.param("nameLast"),
		email = req.param("email"),
		address = req.param("address"),
		city = req.param("city"),
		zip = req.param("zip");

	customer.add(nameFirst, nameLast, email, address, city, zip);

	console.log(nameFirst);
	res.json({'success':true});

}


exports.newCustomer = newCustomer;