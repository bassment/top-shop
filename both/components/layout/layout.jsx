injectTapEventPlugin();

var { Styles, AppCanvas } = MUI;
var { ThemeManager } = Styles;

MainLayout = React.createClass({
  childContextTypes: {
       muiTheme: React.PropTypes.object.isRequired
   },

  getChildContext() {
     return {
         muiTheme: ThemeManager.getMuiTheme(myTheme)
     };
  },

  render() {
    DocHead.addLink({
      rel: "stylesheet",
      type: "text/css",
      href: "https://fonts.googleapis.com/css?family=Roboto:400,300,500"
    });
    return (
      <AppCanvas>
        <DesktopMenu />
        <main>{this.props.content}</main>
      </AppCanvas>
    );
  }
});
