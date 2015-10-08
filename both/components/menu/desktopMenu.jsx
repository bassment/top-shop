var {
  Paper,
  AppCanvas,
  EnhancedButton,
  Tabs,
  Tab,
  IconMenu,
  MenuItem,
  IconButton
 } = MUI;

DesktopMenu = React.createClass({
  render() {
    return (
      <Paper style={styles.paper} zDepth={2} rounded={false}>
        <EnhancedButton
          style={styles.button}
          linkButton={true}
          href={FlowRouter.path('home')}
          centerRipple={true}>
            <img style={styles.logoImage} src="/images/Logo.png" />
            <span style={styles.logoText}>Top Shop</span>
        </EnhancedButton>
        <div style={styles.tabsRight}>
          <Tabs style={styles.tabs}>
            <Tab style={styles.tab} label="Shoes" />
            <Tab style={styles.tab} label="Clothes" />
            <Tab style={styles.tab} label="Hats" />
          </Tabs>
        </div>
        <IconMenu style={styles.menuIcon} iconButtonElement={
            <IconButton iconStyle={styles.buttonIcon} iconClassName="zmdi zmdi-more-vert" tooltip="Menu"/>}
            openDirection="bottom-left" >
            <MenuItem index={0}>Payment&nbsp;Methods</MenuItem>
            <MenuItem index={1}>Register</MenuItem>
            <MenuItem index={2}>Sign&nbsp;In</MenuItem>
        </IconMenu>
      </Paper>
    );
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
    width: 65,
    top: 20
  },
  logoText: {
    color: '#fff',
    fontSize: 26,
    fontWeight: 500,
    left: 70,
    position: 'absolute',
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
