Portfolio.Views.Contact = Backbone.View.extend({
  template: JST["contact/contact"],
  
  
  render: function(){
    this.$el.html(this.template());
    return this;
  }
});