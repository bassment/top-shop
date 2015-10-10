FlowRouter.route('/', {
  name: "home",
  action: function () {
    DocHead.setTitle("Top Shop");
    ReactLayout.render(MainLayout, {content: <Home />});
  }
});

FlowRouter.route('/shoes', {
  name: "shoes",
  action: function () {
    DocHead.setTitle("Shoes");
    ReactLayout.render(MainLayout, {content: <Shoes />});
  }
});

FlowRouter.route('/clothes', {
  name: "clothes",
  action: function () {
    DocHead.setTitle("Clothes");
    ReactLayout.render(MainLayout, {content: <Clothes />});
  }
});

FlowRouter.route('/hats', {
  name: "hats",
  action: function () {
    DocHead.setTitle("Hats");
    ReactLayout.render(MainLayout, {content: <Hats />});
  }
});
