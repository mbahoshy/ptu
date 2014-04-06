pm.equipmentHistoryView = Backbone.View.extend ({
        tagName: 'div',
        id: 'equipment_history_container',
        template: _.template("Equipment History"),
        initialize: function (tickets) {
			this.$el.html( this.template);
			tickets.forEach(this.createView, this);

    		$('#page').append(this.$el);       
        },
        createView: function (model) {
        	var eh = new pm.equipmentHistoryPM (model);
        	this.$el.append(eh.$el);
        }

});

pm.equipmentHistoryPM = Backbone.View.extend ({
        tagName: 'div',
        class: 'equipment-history-item',
        gas: _.template(pm.templates.gasPMView),
	    electric: _.template(pm.templates.electricPMView),
	    ac: _.template(pm.templates.acPMView),
	    heatpump: _.template(pm.templates.heatpumpPMView),
	    airhandler: _.template(pm.templates.airhandlerPMView),
   		split: _.template(pm.templates.splitPMView),
        initialize: function (ticket) {
			this.$el.append(this[ticket.type](ticket));
			

        }
});