FlowRouter.route('/', {
  name: "home",
  action: function () {
    DocHead.setTitle("Top Shop");
    ReactLayout.render(MainLayout, {content: <Home />});
  }
});
