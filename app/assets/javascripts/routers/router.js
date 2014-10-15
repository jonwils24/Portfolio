Portfolio.Routers.Router = Backbone.Router.extend({
  initialize: function(options) {
    this.$rootEl = options.$rootEl;
  },
  
  routes: {
    '': 'splashPage',
    'about': 'aboutPage',
    'projects': 'projectsPage',
    'contact': 'contactPage'
  },
  
  splashPage: function () {
    var splashView = new Portfolio.Views.Splash();
    this._swapView(splashView);
  },
  
  aboutPage: function () {
    var aboutView = new Portfolio.Views.About();
    this._swapView(aboutView);
  },
  
  projectsPage: function () {
    var projectsView = new Portfolio.Views.Projects();
    this._swapView(projectsView);
  },
  
  contactPage: function () {
    var contactView = new Portfolio.Views.Contact();
    this._swapView(contactView);
  },
  
  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
});