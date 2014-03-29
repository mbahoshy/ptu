var mod = require('../node/modules');
// var Auth = require('./auth');


module.exports = function (app) {

	//responds with index.html
	app.get("/", function(req, res) {
		console.log('index');
		res.redirect("/index.html");

	});

	app.post('/customer/:nameFirst/:nameLast/:address/:city/:zip', mod.newCustomer);

}

