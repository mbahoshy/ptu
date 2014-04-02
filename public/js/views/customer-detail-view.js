pm.customerDetailView = Backbone.View.extend({
        tagName: 'div',
        className: 'customer-detail-view',
        template: _.template("<div>Name: <%= nameLast %>, <%= nameFirst %></div><div>Address: <%= address.street %>, <%= address.city %></div>"),
        initialize: function (model) {
			this.$el.html( this.template(model));
    		$('#page').append(this.$el);
                
        }
});

// pm.customerOptions = Backbone.View.extend({
//         tagName: 'div',
//         className: 'customer-options',
//         template: _.template("<div class='button' id='add_equip'>Add Equipment</div>"),
//         render : function (id) {
//                 this.$el.html( this.template());
//                 this.customerid = id;
//                 return this;
//         },
//         events: {
//         	'click #add_equip': 'addEquip'     
//         },
//         addEquip: function () {
//         	console.log("add equipment");
//         	// console.log(this.customerid);
//         	pm.router.navigate('#/addequipment/' + this.customerid);
//         }
// });

pm.customerEquipmentView = Backbone.View.extend({
		tagName: 'div',
        className: 'customer-equipment-container',
        title: _.template("<div>Current Equipment</div>"),
        template: _.template("<div class='customer-equipment'><p><%= type %></p><p>Make: <%= make %></p><p>Model #: <%= model %></p><p>Serial #: <%= serial %></p><div id='<%= equipmentid %>' class='create-pm'>Create PM</div></div>"),
        addequiptemplate: _.template("<div id='add_equip'>Add Equipment</div>"),

        events: {
        	'click .create-pm': 'createPM',
            'click #add_equip': 'addEquip'
        },
        initialize: function (equipment, customerid) {
        	this.customerid = customerid;
        	this.$el.append(this.title);
        	equipment.forEach(this.renderEquip, this);
            this.$el.append(this.addequiptemplate);
        	$('#page').append(this.$el);
        },
        renderEquip: function (model) {
        	this.$el.append(this.template(model));
        },
        createPM: function (e) {
        	// e.target.id = equipmentid
        	pm.router.navigate('#/addpm/' + this.customerid + '/' + e.target.id);
        	console.dir("create service clicked");
        },
        addEquip: function () {
            console.log("add equipment");
            // console.log(this.customerid);
            pm.router.navigate('#/addequipment/' + this.customerid);
        }
});

pm.customerPMView = Backbone.View.extend ({
        tagName: 'table',
        className: 'customer-pm-list',
        title: _.template("<tr><th>Equipment Type</th><th>Make</th><th>Model</th><th>Last Serviced</th></tr>"),
        initialize: function (pm, customerid) {
            this.$el.append(this.title);
            this.customerid = customerid;
            pm.forEach(this.renderPM, this);
            $('#page').append(this.$el);
        },
        renderPM: function (model) {
            model.customerid = this.customerid;
            var customerview1 = new pm.customerShortPM({model: model});
            this.$el.append(customerview1.$el);    
        }
});

pm.customerShortPM = Backbone.View.extend({
        tagName: 'tr',
        pmtemplate: _.template("<td><%= type %></td><td><%= make %></td><td><%= model %></td><td><%= date %></td>"),
        events: {
            'mouseenter': 'pmHover',
            'mouseleave': 'pmHover',
            'click': 'loadPMView'
        },
        initialize: function () {
            // var d = model.date;
            model = this.model;
            var d = new Date(model.date);

            var c = (d.getMonth() + 1) + " / " + d.getDate() + ' / ' + d.getFullYear();
            model.date = c;
            this.$el.append(this.pmtemplate(model));
        },
        pmHover: function () {
            this.$el.toggleClass('pm-hover');
        },
        loadPMView: function () {
            console.dir(this.model);
            pm.router.navigate('#/pm/' + this.model.customerid + '/' + this.model.pmid);
        }

});