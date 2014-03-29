var mod = require('../node/modules');
// var Auth = require('./auth');


module.exports = function (app) {

	//responds with index.html
	app.get("/", function(req, res) {
		console.log('index');
		res.redirect("/index.html");

	});

	app.post('/customer/:nameFirst/:nameLast/:email/:street/:city/:zip', mod.newCustomer);

	app.get('/customer', mod.returnCustomers);

}

