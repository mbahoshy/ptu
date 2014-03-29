pm.newCustomerView = Backbone.View.extend({
        tagName: 'div',
        className: '',
        template: _.template("<form method='POST' action='/newcustomer' id='new_customer_form'>First name: <input type='text' id='nameFirst'><br>Last name: <input type='text' id='nameLast'><br>Address: <input type='text' id='address'><br>City: <input type='text' id='city'><br>Zip: <input type='text' id='zip'><br><input type='submit' id='submit' value='Submit'></form>"),
        events: {
                "click #submit": "submitCustomer"
        },

        render : function () {
                this.$el.html( this.template() );
                return this;
        },

        submitCustomer : function (e) {
            e.preventDefault();
            // console.dir(e.nameLast);
            var nameFirst = $('#nameFirst').val(),
                nameLast = $('#nameLast').val(),
                address = $('#address').val(),
                city = $('#city').val(),
                zip = $('#zip').val();

            $.post('/customer/' + nameFirst + '/' + nameLast + '/' + address + '/' + city + '/' + zip, function (data) {
                console.dir(data);
                if (data.success == true) {
                    pm.router.navigate('#/home/true');
                }
            });

            // $('#new_customer_form').submit();

        }
});