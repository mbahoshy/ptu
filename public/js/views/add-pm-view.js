pm.newPMView = Backbone.View.extend({
	tagName: 'div',
    className: '',
    gas: _.template(pm.templates.gasPM),
    electric: _.template(pm.templates.electricPM),
    ac: _.template(pm.templates.acPM),
    heatpump: _.template(pm.templates.heatpumpPM),
    airhandler: _.template(pm.templates.airhandlerPM),
    split: _.template(pm.templates.splitPM),
    initialize: function (equipment) {
    	console.dir(equipment);
		this.$el.append(this[equipment.type](equipment));
		$('#page').append(this.$el);
    },
    events: {
    	'click #submit_pm': 'submitPM'
    },
    submitPM: function (e) {
    	e.preventDefault();
    	var x = $('#pmform').serializeObject();
    	console.dir(x);
    }
});