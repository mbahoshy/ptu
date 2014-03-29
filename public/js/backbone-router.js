pm.Router = Backbone.Router.extend({
    routes: {
        "class/:classid/:chapterindex": "displayChapter", //displays chapters

    },


    intervals: {},

    displayListOfClassrooms: function () {
    },

    clearBody: function() {
    }
});

pm.router = new pm.Router();
Backbone.history.start({root: "/"});

