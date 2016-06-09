var app = app || {};

(function($){
  app.templateManager = {
    templates: {},

    get: function(id, callback){
      var template = this.templates[id];

      if (template) {
        callback(template);

      } else {

        var that = this;
        $.get("/template/" + id + ".tmpl", function(template){
          var $tmpl = $(template);
          that.templates[id] = $tmpl;
          callback($tmpl);
        });

      }

    }
  }
})(jQuery);