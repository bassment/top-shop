var { Styles, Paper } = MUI;
var { ThemeManager } = Styles;

Hats = React.createClass({
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
        <p>
          Early Western travelers, whether to Persia, Turkey,
          India, or China, would frequently remark on the absence of change in fashion there.
          The Japanese Shogun's secretary bragged (not completely accurately) to a Spanish visitor in 1609 that
          Japanese clothing had not changed in over a thousand years.[4] However, there is considerable evidence in
          Ming China of rapidly changing fashions in Chinese clothing.[5] Changes in costume often took place at times
          of economic or social change, as occurred in ancient Rome and the medieval Caliphate, followed by a long period
          without major changes. In 8th-century Moorish Spain the musician Ziryab introduced to Córdoba[6]
          [unreliable source?][7] sophisticated clothing-styles based on seasonal and daily fashions from his native Baghdad,
           modified by his own inspiration. Similar changes in fashion occurred in the 11th century in the Middle East
           following the arrival of the Turks, who introduced clothing styles from Central Asia and the Far East.[8]
           The beginning in Europe of continual and increasingly rapid change in clothing styles can be fairly
           reliably dated. Historians, including James Laver and Fernand Braudel, date the start of
           Western fashion in clothing to the middle of the 14th century.[9][10] The most
           dramatic early change in fashion was a sudden drastic shortening and tightening of the male
           over-garment from calf-length to barely covering the buttocks,[11] sometimes accompanied with stuffing in
           the chest to make it look bigger. This created the distinctive Western outline of a tailored top worn over
           leggings or trousers.
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
