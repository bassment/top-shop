var { Styles, Paper } = MUI;
var { ThemeManager } = Styles;

Clothes = React.createClass({
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext() {
   return {
     muiTheme: ThemeManager.getMuiTheme(myTheme)
   };
  },

  render() {
    return (
      <Paper style={styles.paper} zDepth={4}>
        <p>Fashion is a popular style or practice, especially in clothing, footwear,
          accessories, makeup, body piercing, or furniture. Fashion is a distinctive and often habitual trend in the style
          in which a person dresses. It is the prevailing styles in behaviour and the newest creations of textile designers.
          [1] Because the more technical term costume is regularly linked to the term "fashion",
          the use of the former has been relegated to special senses like fancy dress or masquerade wear,
          while "fashion" generally means clothing, including the study of it.
          Although aspects of fashion can be feminine or masculine, some trends are androgynous
        </p>
      </Paper>
    );
  }
});

var styles = {
  paper: {
    background: '#FFCCBC',
    marginTop: 100
  }
};
