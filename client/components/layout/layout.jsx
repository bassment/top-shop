injectTapEventPlugin();

var { Styles, AppCanvas, AppBar, LeftNav, MenuItem } = MUI;
var { ThemeManager } = Styles;

MainLayout = React.createClass({
  childContextTypes: {
       muiTheme: React.PropTypes.object
   },

  getChildContext() {
     return {
         muiTheme: ThemeManager.getMuiTheme(myTheme)
     };
  },

  componentWillMount() {
    let setTabsState = function() {
      this.setState({renderTabs: document.body.clientWidth <= 768});
    }.bind(this);
    setTabsState();
    window.onresize = setTabsState;
  },

  render() {
    var menuItems = [
      { type: MenuItem.Types.LINK, payload: FlowRouter.path('shoes'), text: 'Shoes' },
      { type: MenuItem.Types.LINK, payload: FlowRouter.path('clothes'), text: 'Clothes' },
      { type: MenuItem.Types.LINK, payload: FlowRouter.path('hats'), text: 'Hats' },
      { type: MenuItem.Types.SUBHEADER, text: 'Supporters' },
      {
         type: MenuItem.Types.LINK,
         payload: "https://www.facebook.com/vel4uk",
         text: 'Donator'
      }
    ];
    return (
      <AppCanvas>
        {this.state.renderTabs ? <AppBar style={styles.appbar} title="Top Shop" onLeftIconButtonTouchTap={this._onLeftIconButtonTouchTap} />
          : <DesktopMenu />}
        <div className="container">
          <main>{this.props.content}</main>
        </div>
        <LeftNav ref="leftNav" docked={false} menuItems={menuItems} />
      </AppCanvas>
    );
  },

  _onLeftIconButtonTouchTap() {
    this.refs.leftNav.toggle();
  }
});


var styles = {
  appbar: {
    height: 64,
    position: 'fixed',
    right: 0,
    top: 0,
    width: '100%',
    zIndex: 4
  },
};
