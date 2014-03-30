var pm = window.pm = {};
pm.Router = Backbone.Router.extend({
    routes: {
        "newcustomer": "createCustomer", //create new customer
        "home/:update": "home", //create new customer
        "customer/:id": "displayCustomer", //create new customer
        "equipment/:id": "addEquipment" //create new customer

    },

    createCustomer: function () {
        this.clearBody();
        var newcustomerview = new pm.newCustomerView ();
        newcustomerview.render();
        $('#page').append(newcustomerview.$el);
    },


    displayCustomer: function (id) {
    	this.clearBody();
    	console.log(id);
    	$.get('/customerid/' + id, function (data) {
    		customerdetailview1 = new pm.customerDetailView ();
    		customerdetailview1.render(data);
    		$('#page').append(customerdetailview1.$el);

    		customeroptionview1 = new pm.customerOptions ();
    		customeroptionview1.render(data._id);
			$('#page').append(customeroptionview1.$el);    		
    		// console.dir(data);
    	});

    },

    addEquipment: function (customerid) {
    	this.clearBody();
    	// console.log(id);

    	addequipmentview1 = new pm.addEquipmentView ();
    	addequipmentview1.render(customerid);
    	$('#page').append(addequipmentview1.$el);
    },

    home: function (update) {
    	this.clearBody();
    	// console.dir(update);
    	if (update) {
    		if (update == 'true') {
    			console.log('update successful!');
    		} else {
    			console.log('update failed, please try again');
    		}
    	}
    	// $('#page').append("")
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