pm.Router = Backbone.Router.extend({
    routes: {
        "new-customer": "create_customer", //displays chapters

    },

    create_customer: function () {
    },

    clearBody: function() {
    }
});

pm.router = new pm.Router();
Backbone.history.start({root: "/"});

