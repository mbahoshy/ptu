pm.newCustomerView = Backbone.View.extend({
        tagName: 'div',
        id:'new_customer_form',
        className: '',
        template: _.template("<form method='POST' action='/newcustomer' id='form'><label>First name:</label><input type='text' id='nameFirst'><label>Last name:</label><input type='text' id='nameLast'><label>Email:</label><input type='text' id='email'><label>Street:</label><input type='text' id='street'><label>City:</label><input type='text' id='city'><label>Zip:</label><input type='text' id='zip'><input type='submit' class='blue-button' id='submit' value='Submit'></form>"),
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
                    pm.router.navigate('#/home');
                }
            });

        }
});