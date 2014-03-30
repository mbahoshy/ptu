pm.addEquipmentView = Backbone.View.extend({
        tagName: 'div',
        className: '',
        template: _.template("Please select one of the following equipment types:"),
        gas: _.template("<div id='gas' class='equipment-option'>Gas Furnace</div>"),
        electric: _.template("<div id='electric' class='equipment-option'>Electric Furnace</div>"),
        airhandler: _.template("<div id='airhandler' class='equipment-option'>Air Handler</div>"),
        ac: _.template("<div id='ac' class='equipment-option'>Air Conditioner</div>"),
        heatpump: _.template("<div id='heatpump' class='equipment-option'>Heat Pump</div>"),
        split: _.template("<div id='split' class='equipment-option'>Duct-free Split</div>"),
        render : function (customerid) {
        	this.$el.append( this.template);
        	this.$el.append( this.gas);
        	this.$el.append( this.electric);
        	this.$el.append( this.airhandler);
        	this.$el.append( this.ac);
        	this.$el.append( this.heatpump);
        	this.$el.append( this.split);
        	this.customerid = customerid;
        },
        events: {
        	'click .equipment-option': 'equipmentSelect'
        },
        equipmentSelect: function (e) {
        	console.dir(e.target.id);
        	$('#page').html('');
        	var equipmentdetailview = new pm.enterEquipmentDetails ();
        	equipmentdetailview.render(e.target.id, this.customerid);
        	$('#page').html(equipmentdetailview.$el);
        }
});

pm.enterEquipmentDetails = Backbone.View.extend({
        tagName: 'div',
        className: '',
        title: _.template("<%= type %>"),
        template: _.template("<form>Make: <input type='text' id='make'><br>Model #: <input type='text' id='model'><br>Serial #: <input type='text' id='serial'><br>Install Date: <input type='text' id='install'><br><input type='submit' id='submit' value='Submit'></form>"),
        events: {
			"click #submit": "submitEquipment"

        },
        render: function(type, customerid) {
        	this.$el.append( this.title({type: type}));
        	this.$el.append( this.template);
        	this.equipmenttype = type;
        	this.customerid = customerid;
        },
        submitEquipment: function (e) {
        	e.preventDefault();
        	console.dir(this);
        	var make = $('#make').val(),
        		model = $('#model').val(),
        		serial = $('#serial').val(),
        		install = $('#install').val(),
        		type = this.equipmenttype,
        		customerid = this.customerid;

        	$.post('/equipment/' + customerid + '/' + type + '/' + make + '/' + model + '/' + serial + '/' + install, function() {

        	});

        }
});