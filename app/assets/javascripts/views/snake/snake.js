Portfolio.Views.Snake = Backbone.View.extend({
  template: JST["snake/snake"],
  
  events: {
    'click .play_again': 'refresh'
  },
  
  refresh: function () {
    location.reload();
  },
  
  render: function(){
    this.$el.html(this.template());
    return this;
  }
});