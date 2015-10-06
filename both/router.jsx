FlowRouter.route('/', {
  name: "home",
  action: function () {
    DocHead.setTitle("Top Shop");
    ReactLayout.render(MainLayout);
  }
});

FlowRouter.route('/shoes', {
  name: "shoes",
  action: function(params) {
    DocHead.setTitle("Shoes");
    ReactLayout.render(MainLayout, {content: <Shoes />});
  }
});

FlowRouter.route('/clothes', {
  name: "clothes",
  action: function() {
    DocHead.setTitle("Clothes");
    ReactLayout.render(MainLayout, {content: <Clothes />});
  }
});
