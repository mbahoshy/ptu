pm.newPMView = Backbone.View.extend({
	tagName: 'div',
    className: '',
    gas: _.template(pm.templates.gasPM),
    electric: _.template(pm.templates.electricPM),
    ac: _.template(pm.templates.electricPM),
    heatpump: _.template(pm.templates.electricPM),
    airhandler: _.template(pm.templates.electricPM),
    split: _.template(pm.templates.electricPM),
    initialize: function (equipment) {
    	console.dir(equipment);
		this.$el.append(this[equipment.type](equipment));
		$('#page').append(this.$el);
    }
});