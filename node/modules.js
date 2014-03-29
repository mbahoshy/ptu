function newCustomer (req, res) {
	var nameFirst = req.param("nameFirst"),
		nameLast = req.param("nameLast"),
		address = req.param("address"),
		city = req.param("city"),
		zip = req.param("zip");

	console.log(nameFirst);
	res.json({'success':true});

}


exports.newCustomer = newCustomer;