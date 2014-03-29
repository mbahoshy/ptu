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
    	console.log(update);
    },

    clearBody: function() {
    	$('#page').html('');
    }
});

pm.router = new pm.Router();
Backbone.history.start({root: "/"});

console.log("backbone router started");