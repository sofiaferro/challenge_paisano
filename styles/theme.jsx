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
  firstBg: { backgroundColor: colorPalette.mainBackground },
  secondBg: { backgroundColor: colorPalette.secondaryBackground },
  fourthText: { color: colorPalette.secondaryBackground },
  button: { backgroundColor: colorPalette.primaryButton },
  secondaryButton: { borderColor: colorPalette.thirdText },
  highlight: { backgroundColor: colorPalette.mainHighlight },
  thirdButton: { backgroundColor: colorPalette.secondaryButton },
};

export { theme };
