var pm = window.pm = {};
pm.Router = Backbone.Router.extend({
    routes: {
        "newcustomer": "createCustomer" //displays chapters

    },

    createCustomer: function () {
        this.clearBody();
        var newcustomerview = new pm.newCustomerView ();
        newcustomerview.render();
        $('#page').append(newcustomerview.$el);
    },

    clearBody: function() {
    	$('#page').html('');
    }
});

pm.router = new pm.Router();
Backbone.history.start({root: "/"});

alert("router started");