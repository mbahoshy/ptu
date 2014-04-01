pm.newCustomerView = Backbone.View.extend({
        tagName: 'div',
        className: '',
        template: _.template("<form method='POST' action='/newcustomer' id='form'>First name: <input type='text' id='nameFirst'><br>Last name: <input type='text' id='nameLast'><br>Email: <input type='text' id='email'><br>Street: <input type='text' id='street'><br>City: <input type='text' id='city'><br>Zip: <input type='text' id='zip'><br><input type='submit' id='submit' value='Submit'></form>"),
        events: {
                "click #submit": "submitCustomer"
        },

        initialize : function () {
                this.$el.html( this.template() );
                $('#page').append(this.$el);
        },

        submitCustomer : function (e) {
            e.preventDefault();

            var nameFirst = $('#nameFirst').val(),
                nameLast = $('#nameLast').val(),
                email = $('#email').val(),
                street = $('#street').val(),
                city = $('#city').val(),
                zip = $('#zip').val();

            $.post('/customer/' + nameFirst + '/' + nameLast + '/' + email + '/' + street + '/' + city + '/' + zip, function (data) {
                console.dir(data);
                if (data.success == true) {
                    pm.router.navigate('#/home/true');
                }
            });

        }
});