FlowRouter.route('/', {
  action: function () {
    DocHead.setTitle("Home Page");
    ReactLayout.render(MainLayout);
  }
});

FlowRouter.route('/shoes', {
  action: function() {
    DocHead.setTitle("Shoes");
    ReactLayout.render(MainLayout, {content: <Shoes />});
  }
});

FlowRouter.route('/clothes', {
  action: function() {
    DocHead.setTitle("Clothes");
    ReactLayout.render(MainLayout, {content: <Clothes />});
  }
});
