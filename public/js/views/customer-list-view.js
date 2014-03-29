pm.customerListView = Backbone.View.extend({
        tagName: 'table',
        className: '',
        template: _.template(""),
        events: {
        },
        render : function () {
                this.collection.forEach(this.addOne, this);
        },

        addOne: function (model) {

                var customerview1 = new pm.customerShortView({
                    model: model
                });
                this.$el.append(customerview1.render().el);
        },
});

pm.customerShortView = Backbone.View.extend({
        tagName: 'tr',
        className: '',
        template: _.template("<td><%= nameFirst %></td><td><%= nameLast %></td><td><%= address.street %></td><td><%= address.city %></td>"),
        events: {
                'click': 'viewCustomer'
        },
        render : function () {
                this.$el.html( this.template(this.model.toJSON()) );
                this.customerId = this.model.toJSON()._id;
                return this;
        },
        viewCustomer: function () {
                console.log(this.customerId);
                pm.router.navigate('#/customer/' + this.customerId);
        }
});