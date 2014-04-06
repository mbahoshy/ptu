pm.equipmentHistoryView = Backbone.View.extend ({
        tagName: 'div',
        id: 'equipment_history_container',
        template: _.template("Equipment History"),
        optionstemplate:_.template("<div class='history-options'><span id='ticket_view'>Ticket View</span><span id='part_view'>Part View</span></div>"),
        containertemplate: _.template("<div id='#ticket_container'></div>"),
        events: {
        	'click #part_view': 'partView',
        	'click #ticket_view': 'ticketView'
        },
        initialize: function (tickets) {
			this.$el.append( this.template);
			this.$el.append( this.optionstemplate);
			this.$el.append( this.containertemplate);
			this.tickets = tickets;
			this.ticketView();
    		       

        },
        createView: function (model) {
        	var eh = new pm.equipmentHistoryPM (model);
        	this.$el.append(eh.$el);
        },
        ticketView: function () {
			this.tickets.forEach(this.createView, this);
			$('#page').append(this.$el);
			// $('#ticket_container').append(this.$el);
        },
        partView: function () {
        	console.dir(this.tickets);
        	$('.equipment-history-item').remove();
        }

});


pm.equipmentHistoryPM = Backbone.View.extend ({
        tagName: 'div',
        className: 'equipment-history-item',
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