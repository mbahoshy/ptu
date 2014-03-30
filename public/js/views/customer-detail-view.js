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

pm.customerEquipmentView = Backbone.View.extend({
		tagName: 'div',
        className: '',
        title: _.template("<div>Customer Equipment</div>"),
        template: _.template("<div class='customer-equipment'><p>Type: <%= type %></p><p>Make: <%= make %></p><p>Model #: <%= model %></p><p>Serial #: <%= serial %></p><p>Install: <%= install %></p><div class='create-service'>Create Service</div></div>"),
        events: {
        	'click .create-service': 'createService'
        },
        initialize: function (equipment) {
        	console.dir(equipment);
        	this.$el.append(this.title);
        	equipment.forEach(this.renderEquip, this);
        	$('#page').append(this.$el);
        },
        renderEquip: function (model) {
        	this.$el.append(this.template(model));
        },
        createService: function () {
        	console.dir();
        }
});