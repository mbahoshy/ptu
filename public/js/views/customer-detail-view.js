pm.customerDetailView = Backbone.View.extend({
        tagName: 'div',
        className: 'customer-detail-view',
        template: _.template("<div>Name: <%= nameLast %>, <%= nameFirst %></div><div>Address: <%= address.street %>, <%= address.city %></div>"),
        initialize: function (model) {
			this.$el.html( this.template(model));
    		$('#page').append(this.$el);
                
        }
});

pm.customerOptions = Backbone.View.extend({
        tagName: 'div',
        className: 'customer-options',
        template: _.template("<div class='button' id='add_equip'>Add Equipment</div>"),
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
        	pm.router.navigate('#/addequipment/' + this.customerid);
        }
});

pm.customerEquipmentView = Backbone.View.extend({
		tagName: 'div',
        className: '',
        title: _.template("<div>Current Equipment</div>"),
        template: _.template("<div class='customer-equipment'><%= type %></p><p>Make: <%= make %></p><p>Model #: <%= model %></p><p>Serial #: <%= serial %></p><div id='<%= equipmentid %>' class='create-pm'>Create PM</div></div>"),
        events: {
        	'click .create-pm': 'createPM'
        },
        initialize: function (equipment, customerid) {
        	this.customerid = customerid;
        	this.$el.append(this.title);
        	equipment.forEach(this.renderEquip, this);
        	$('#page').append(this.$el);
        },
        renderEquip: function (model) {
        	this.$el.append(this.template(model));
        },
        createPM: function (e) {
        	// e.target.id = equipmentid
        	pm.router.navigate('#/addpm/' + this.customerid + '/' + e.target.id);
        	console.dir("create service clicked");
        }
});