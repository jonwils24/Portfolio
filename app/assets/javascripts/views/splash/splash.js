Portfolio.Views.Splash = Backbone.View.extend({
  template: JST["splash/splash"],
  
  
  render: function(){
    this.$el.html(this.template());
    return this;
  }
});