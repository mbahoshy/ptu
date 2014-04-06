pm.equipmentHistoryView = new Backbone.View.extend ({
        tagName: 'div',
        id: 'equipment_history_container',
        template: _.template("Equipment History"),
        initialize: function (collection) {
			this.$el.html( this.template);
			collection.forEach(this.createView, this);


    		$('#page').append(this.$el);       
        },
        createView: function (model) {

        }

});

pm.equipmentHistoryPM = new Backbone.View.extend ({
        tagName: 'div',
        class: 'equipment-history-item',
        gas: _.template(pm.templates.gasPMView),
	    electric: _.template(pm.templates.electricPMView),
	    ac: _.template(pm.templates.acPMView),
	    heatpump: _.template(pm.templates.heatpumpPMView),
	    airhandler: _.template(pm.templates.airhandlerPMView),
   		split: _.template(pm.templates.splitPMView),
        initialize: function (collection) {
			this.$el.append(this[ticket.type](ticket));
			$('#page').append(this.$el);

        }
});