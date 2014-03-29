pm.customerListView = Backbone.View.extend({
        tagName: 'div',
        className: '',
        template: _.template(""),
        events: {
        },

        render : function () {
                this.$el.html( this.template() );
                return this;
        },
});