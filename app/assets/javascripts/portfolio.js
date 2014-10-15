window.Portfolio = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  Utils: {},
  
  initialize: function(options) {
    new Portfolio.Routers.Router({
      $rootEl: options.$main
    });
    Backbone.history.start();
    
    // options.$navbar.html(new Portfolio.Views.Splash().render().$el);
  }
};