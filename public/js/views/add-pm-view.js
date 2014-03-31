pm.newPMView = Backbone.View.extend({
	tagName: 'div',
    className: '',
    gas: _.template(pm.templates.gasPM),
    initialize: function (equipment) {
    	console.dir(equipment);
		this.$el.append(this.gas(equipment));
		$('#page').append(this.$el);
    }
});