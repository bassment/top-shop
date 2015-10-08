var Spacing = MUI.Styles.Spacing;
var Colors = MUI.Styles.Colors;
var ColorManipulator = MUI.Utils.ColorManipulator;

myTheme = {
  spacing: Spacing,
  fontFamily: 'Helvetica Neue',
  palette: {
    primary1Color: Colors.cyan500,
    primary2Color: Colors.cyan700,
    primary3Color: Colors.lightBlack,
    accent1Color: Colors.indigo500,
    accent2Color: Colors.grey100,
    accent3Color: Colors.grey500,
    textColor: Colors.darkBlack,
    alternateTextColor: Colors.white,
    canvasColor: Colors.white,
    borderColor: Colors.grey300,
    disabledColor: ColorManipulator.fade(Colors.darkBlack, 0.3),
  }
};
