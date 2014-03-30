pm.customerDetailView = Backbone.View.extend({
        tagName: 'div',
        className: 'customer-detail-view',
        template: _.template("<div>Name: <%= nameLast %>, <%= nameFirst %></div><div>Address: <%= address.street %>, <%= address.city %></div>"),
        render : function (model) {
                this.$el.html( this.template(model));
                return this;
        },
        events: {
                
        },
});

pm.customerOptions = Backbone.View.extend({
        tagName: 'div',
        className: 'customer-options',
        template: _.template("<div id='add_equip'>Add Equipment</div><div id='create_pm'>Create Maintenance</div>"),
        render : function (id) {
                this.$el.html( this.template());
                this.customerid = id;
                return this;
        },
        events: {
        	'click #add_equip': 'addEquip'     
        },
        addEquip: function () {
        	console.log("add equipment");
        	// console.log(this.customerid);
        	pm.router.navigate('#/equipment/' + this.customerid);
        }
});