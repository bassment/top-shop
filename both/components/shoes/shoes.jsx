var {
  RaisedButton,
  ListItem,
  ListDivider,
  List
} = MUI;

var { ThemeManager, LightRawTheme } = MUI.Styles;

Shoes = React.createClass({
  childContextTypes: {
        muiTheme: React.PropTypes.object
    },

  getChildContext() {
      return {
          muiTheme: ThemeManager.getMuiTheme(LightRawTheme)
      };
  },

  render() {
    return (
      <div>
        <div className="container">
          <div className="well">
            <h1>This is the page for Shoes!</h1>
            <RaisedButton
              linkButton={true}
              primary={true}
              href="/clothes"
              label="Clothes" />
          </div>
          <div className="col-md-6 col-md-offset-3">
            <List>
              <ListItem primaryText="Inbox"  />
              <ListItem primaryText="Starred"  />
              <ListItem primaryText="Sent mail"  />
              <ListItem primaryText="Drafts"  />
              <ListItem primaryText="Inbox"  />
            </List>
            <ListDivider />
            <List>
              <ListItem primaryText="All mail"  />
              <ListItem primaryText="Trash"  />
              <ListItem primaryText="Spam"  />
              <ListItem primaryText="Follow up"  />
            </List>
          </div>
        </div>
      </div>
    );
  }
});
