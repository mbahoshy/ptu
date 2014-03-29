var pm = window.pm = {};
pm.Router = Backbone.Router.extend({
    routes: {
        "newcustomer": "createCustomer", //create new customer
        "home/:update": "home" //create new customer

    },

    createCustomer: function () {
        this.clearBody();
        var newcustomerview = new pm.newCustomerView ();
        newcustomerview.render();
        $('#page').append(newcustomerview.$el);
    },

    home: function (update) {
    	console.dir(update);
    	if (update) {
    		if (update == 'true') {
    			console.log('update successful!');
    		} else {
    			console.log('update failed, please try again');
    		}
    	}
    	this.clearBody();
    	$.get('/customer', function (data) {
    		customerCollection1 = new pm.customerCollection ();
    		customerCollection1.reset(data);
    		customerlistview1 = new pm.customerListView ({collection: customerCollection1});
    		customerlistview1.render();
    		$('#page').append(customerlistview1.$el);
    		console.dir(data);
    	});

    },

    clearBody: function() {
    	$('#page').html('');
    }
});

pm.router = new pm.Router();
Backbone.history.start({root: "/"});

console.log("backbone router started");