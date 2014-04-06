pm.Router = Backbone.Router.extend({
    routes: {
        "newcustomer": "createCustomer", //create new customer
        "home": "home", //create new customer
        "customer/:customerid": "displayCustomer", //create new customer
        "addequipment/:customerid": "addEquipment", //add equipment to exsiting customer
        "addpm/:customerid/:equipmentid": "addPM", //add service to existing equipment
        "pm/:customerid/:pmid": "viewPM",
        "equipmenthistory/:customerid/:equipmentid": "viewEquipHistory"
    },
    createCustomer: function () {
        this.clearBody();
        var newcustomerview = new pm.newCustomerView ();        
    },


    displayCustomer: function (customerid) {
    	this.clearBody();
    	console.log(customerid);
    	$.get('/customerid/' + customerid, function (data) {

    		var customerdetailview1 = new pm.customerDetailView (data);
    		
    		var customerpmview1 = new pm.customerPMView (data.pm, customerid);
   //  		var customeroptionview1 = new pm.customerOptions ();
   //  		customeroptionview1.render(data._id);
			// $('#page').append(customeroptionview1.$el);

			var customerequipmentview = new pm.customerEquipmentView (data.equipment, data._id); 		
    		console.dir(data);
    	});
    },

    viewEquipHistory: function (customerid, equipmentid) {
        this.clearBody();
        $.get('/customerid/' + customerid, function (data) {
            var z = _.where(data.pm, {equipmentid: equipmentid});
            console.dir(z);

        });



    },

    addEquipment: function (customerid) {
    	this.clearBody();
    	// console.log(id);

    	addequipmentview1 = new pm.addEquipmentView ();
    	addequipmentview1.render(customerid);
    	$('#page').append(addequipmentview1.$el);
    },

    addPM: function (customerid, equipmentid) {
    	this.clearBody();

    	var equipment,
			intEquipmentId = parseInt(equipmentid);

    	$.get('/customerid/' + customerid, function (data) {

    		equipment = _.findWhere(data.equipment, {equipmentid: intEquipmentId});
    		var pmview1 = new pm.newPMView (equipment, customerid);

    	});
    },

    home: function () {
    	this.clearBody();

    	var customersearch = new pm.customerSearchBox ();
    	var homeoptions = new pm.homeOptions ();

    	$.get('/customer', function (data) {
    		customerCollection1 = new pm.customerCollection ();
    		customerCollection1.reset(data);
    		customerlistview1 = new pm.customerListView ({collection: customerCollection1});
    		customerlistview1.render();
    		$('#page').append(customerlistview1.$el);
    		console.dir(data);
    	});

    },
    viewPM: function (customerid, pmid) {
    	this.clearBody();
    	var ticket,
    		pmidint = parseInt(pmid);

    	$.get('/customerid/' + customerid, function (data) {
    		ticket = _.findWhere(data.pm, {"pmid": pmidint});
    		console.dir(ticket);
    		var pmdetailview1 = new pm.pmDetailView (ticket);
    	});
    	
    },
    clearBody: function() {
    	$('#page').html('');
    }
});

pm.router = new pm.Router();
Backbone.history.start({root: "/"});

$(document).ready(function() {
	pm.router.navigate('#/home');
});

console.log("backbone router started");