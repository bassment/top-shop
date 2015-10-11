var { Styles, Paper } = MUI;
var { ThemeManager } = Styles;

Home = React.createClass({
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
  },
});

var styles = {
  paper: {
    background: '#FFCCBC',
    marginTop: 100
  }
};
