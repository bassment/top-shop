var {
  Paper,
  AppCanvas,
  EnhancedButton,
  Tabs,
  Tab,
  IconMenu,
  MenuItem,
  IconButton,
  Dialog
 } = MUI;

DesktopMenu = React.createClass({
  getInitialState() {
    return {
      tabsValue: this._findTab()
    };
  },


  render() {
    return (
      <div>
        <Dialog
            title="Login"
            ref="Login">
            Insert your login info here
        </Dialog>
        <Paper style={styles.paper} zDepth={2} rounded={false}>
          <EnhancedButton
            style={styles.button}
            onClick={this._goHome}
            centerRipple={true}>
              <img style={styles.logoImage} src="/images/Logo.png" />
              <span style={styles.logoText}>Top Shop</span>
          </EnhancedButton>
          <div style={styles.tabsRight}>
            <Tabs style={styles.tabs}
              valueLink={{value: this.state.tabsValue, requestChange: this._handleTabsChange}}
              initialSelectedIndex={this.state.selectTabIfRoute}>
              <Tab style={styles.tab} value='a' label="Shoes" onActive={this._goShoes} />
              <Tab style={styles.tab} value='b' label="Clothes" onActive={this._goClothes} />
              <Tab style={styles.tab} value='c' label="Hats" onActive={this._goHats}/>
            </Tabs>
          </div>
          <IconMenu style={styles.menuIcon} onClick={this._loginDialog} iconButtonElement={
              <IconButton iconStyle={styles.buttonIcon} iconClassName="zmdi zmdi-more-vert" tooltip="Menu"/>}
              openDirection="bottom-left" >
              <MenuItem index={0}>Login</MenuItem>
          </IconMenu>
        </Paper>
      </div>
    );
  },

  _loginDialog() {
    this.refs.Login.show();
  },

  _handleTabsChange(value) {
    this.setState({
      tabsValue: value
    });
  },

  _findTab() {
    var result = '';
    switch(FlowRouter.getRouteName()) {
      case 'home': result = 'd'; break;
      case 'shoes': result = 'a'; break;
      case 'clothes': result = 'b'; break;
      case 'hats': result = 'c'; break;
      }
    return result;
  },

  _goHome() {
    FlowRouter.go(FlowRouter.path('home'));
    // deselect Tabs when going Home
    this.setState({
      tabsValue: 'd'
    });
  },

  _goShoes() {
    FlowRouter.go(FlowRouter.path('shoes'));
  },

  _goClothes() {
    FlowRouter.go(FlowRouter.path('clothes'));
  },

  _goHats() {
    FlowRouter.go(FlowRouter.path('hats'));
  }

});


var styles = {
  paper: {
    background: '#E64A19',
    height: 64,
    position: 'fixed',
    right: 0,
    top: 0,
    width: '100%',
    zIndex: 4
  },
  button: {
    left: 24,
    position: 'fixed',
    width: 200
  },
  logoImage: {
    position: 'relative',
    width: 64,
    right: 62
  },
  logoText: {
    position: 'absolute',
    color: '#fff',
    fontSize: 26,
    fontWeight: 500,
    left: 70,
    top: 18
  },
  tabsRight: {
    position: 'absolute',
    right: 60,
    bottom: 0
  },
  tabs: {
    width: 400,
    bottom: 0
  },
  tab: {
    height: 64,
    textTransform: 'uppercase'
  },
  menuIcon: {
    right: 12,
    position: 'absolute',
    top: 8,
    zIndex: 5
  },
  buttonIcon: {
    color: '#fff'
  }
};
