Portfolio.Views.Projects = Backbone.View.extend({
  template: JST["projects/projects"],
  
  
  render: function(){
    this.$el.html(this.template());
    return this;
  }
});