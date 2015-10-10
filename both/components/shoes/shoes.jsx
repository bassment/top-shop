var { Styles, Paper } = MUI;
var { ThemeManager } = Styles;

Shoes = React.createClass({
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
          he idea of unisex dressing originated in the 1960s when designers such as Pierre Cardin
          and Rudi Gernreich created garments, such as stretch jersey tunics or leggings,
          meant to be worn by both males and females. The impact of unisex expands more broadly to encompass
          various themes in fashion including androgyny, mass-market retail, and conceptual clothing.[20]
          The fashion trends of the 1970s, such as sheepskin jackets, flight jackets, duffel coats, and unstructured
          clothing influenced men to attend social gatherings without a tuxedo jacket and to accessorize in new ways.
          Some men's styles blended the sensuality and expressiveness despite the conservative trend, the growing gay-rights movement and an emphasis on youth allowed for a new freedom to experiment with style, fabrics such as wool crepe, which had previously been associated with women's attire was used by designers when creating male clothing.[21]
          The four major current fashion capitals are acknowledged to be Paris, Milan, New York City, and London, which are all
          headquarters to the greatest fashion companies and are renowned for their major influence on global fashion. Fashion
          weeks are held in these cities, where designers exhibit their new clothing collections to audiences. A succession of
          major designers such as Coco Chanel and Yves Saint-Laurent have kept Paris as the center most watched by the rest of
          the world, although haute couture is now subsidized by the sale of ready-to-wear collections and perfume using the same
          branding.
          Modern Westerners have a wide number of choices available in the selection of their clothes.
          What a person chooses to wear can reflect his or her personality or interests. When people who have high
          cultural status start to wear new or different clothes, a fashion trend may start. People who like or respect
          these people become influenced by their personal style and begin wearing similarly styled clothes. Fashions may
          vary considerably within a society according to age, social class, generation, occupation, and geography and may
          also vary over time. If an older person dresses according to the fashion young people use, he or she may look
          ridiculous in the eyes of both young and older people. The terms fashionista and fashion victim refer to someone
          who slavishly follows current fashions. One can regard the system of sporting various fashions as a fashion
          language incorporating various fashion statements using a grammar of fashion. (Compare some of the work of
          Roland Barthes.) In recent years, Asian fashion has become increasingly
          significant in local and global markets. Countries such as China, Japan, India, and
          Pakistan have traditionally had large textile industries, which have often been drawn upon
          by Western designers, but now Asian clothing styles are also gaining influence based on their own ideas.[22]
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
