// data
const colorPalette = {
  primaryText: '#FCFCFD',
  secondaryText: '#F4F5F6',
  thirdText: '#777E91',
  mainBackground: '#141416',
  secondaryBackground: '#23262F',
  primaryButton: '#3772FF',
  secondaryButton: '#E6E8EC',
  mainHighlight: '#45B36B',
};

const theme = {
  primaryText: { color: colorPalette.primaryText },
  secondaryText: { color: colorPalette.secondaryText },
  thirdText: { color: colorPalette.thirdText },
  primaryBg: { backgroundColor: colorPalette.mainBackground },
  secondaryBg: { backgroundColor: colorPalette.secondaryBackground },
  fourthText: { color: colorPalette.secondaryBackground },
  button: { backgroundColor: colorPalette.primaryButton },
  secondaryButton: { borderColor: colorPalette.thirdText },
  thirdButton: { backgroundColor: colorPalette.secondaryButton },
  highlight: { color: colorPalette.mainHighlight },
  backgroundHighlight: { backgroundColor: colorPalette.mainHighlight },
};

export { theme };
