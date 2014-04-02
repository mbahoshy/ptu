pm.pmDetailView = Backbone.View.extend ({
	tagname:'div',
    gas: _.template(pm.templates.gasPMView),
    electric: _.template(pm.templates.electricPMView),
    ac: _.template(pm.templates.acPMView),
    heatpump: _.template(pm.templates.heatpumpPMView),
    airhandler: _.template(pm.templates.airhandlerPMView),
    split: _.template(pm.templates.splitPMView),
    initialize: function (ticket) {
    	// this.equipmenttype = equipment.type;
    	// this.customerid = customerid;
		this.$el.append(this[ticket.type](ticket));
		$('#page').append(this.$el);
    },
});