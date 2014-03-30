pm.customerListView = Backbone.View.extend({
        tagName: 'table',
        className: '',
        id:'customer-list-table',
        template2:_.template("<a href='#/newcustomer'><div id=''>New Customer</div></a><h2>All Customers</h2>"),
        template: _.template("<tr><th>First Name</th><th>Last Name</th><th>Street</th><th>City</th></tr>"),
        events: {
        },
        render : function () {
                this.$el.append( this.template2() );
                this.$el.append( this.template() );
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
                'click': 'viewCustomer',
                'mouseenter': 'hoverCustomer',
                'mouseleave': 'hoverCustomer'
        },
        render : function () {
                this.$el.html( this.template(this.model.toJSON()) );
                this.customerId = this.model.toJSON()._id;
                return this;
        },
        viewCustomer: function () {
                console.log(this.customerId);
                pm.router.navigate('#/customer/' + this.customerId);
        },
        hoverCustomer: function () {
                this.$el.toggleClass('customer-hover');
        }
});
