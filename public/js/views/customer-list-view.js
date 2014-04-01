pm.customerListView = Backbone.View.extend({
        tagName: 'table',
        className: '',
        id:'customer_list_table',
        template: _.template("<tr><th>Last Name</th><th>First Name</th><th>Street</th><th>City</th></tr>"),
        events: {
        },
        initialize: function (){
            var that = this;
            this.collection.bind("reset", this.render, this);
        },
        render : function () {
                this.$el.html('');
                console.dir(this);
                this.$el.append( this.template() );
                this.collection.forEach(this.addOne, this);
        },

        addOne: function (model) {

                var customerview1 = new pm.customerShortView({model: model});
                this.$el.append(customerview1.render().el);
        },
});

pm.customerSearchBox = Backbone.View.extend({
        tagName: 'div',
        className: 'customer-search-box',
        template2:_.template("<form method='post' id='searchForm' action='/customersearch'>Search: <input type='text' value='enter search terms' id='searchterms'><select id='searchoptions'><option value='nameLast'>Last Name</option><option value='nameFirst'>First Name</option><option value='city'>City</option></select><input type='submit' id='customer_search' value='Search'></form>"),
        events: {
            'click #customer_search': 'customerSearch'
        },
        initialize: function () {
            this.$el.append( this.template2() );
            $('#page').append(this.$el);        
        },
        customerSearch: function (e) {
            e.preventDefault();

            var searchoptions = $('#searchoptions').val();
            var searchterms = $('#searchterms').val();

            var y = {};
            y[searchoptions] = searchterms;
            console.dir(y);
            
            $.post('/customersearch', y, function(data) {
                console.dir(data)
                customerCollection1.reset(data);

            });
        }
});

pm.customerShortView = Backbone.View.extend({
        tagName: 'tr',
        className: '',
        template: _.template("<td><%= nameLast %></td><td><%= nameFirst %></td><td><%= address.street %></td><td><%= address.city %></td>"),
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


pm.homeOptions = Backbone.View.extend ({
        tagName: 'div',
        className: 'home-options',
        template2:_.template("<a href='#/newcustomer'><div class='button' id='new_customer'>New Customer</div></a>"),
        initialize: function () {
            this.$el.append( this.template2() );
            $('#page').append(this.$el);
        }

});