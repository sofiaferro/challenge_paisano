import { theme } from './theme';

const { primaryText, secondaryText, thirdText } = theme;

const texts = {
  h1: {
    ...primaryText,
    fontFamily: 'DM Sans',
    fontWeight: 600,
    fontSize: '64px',
    lineHeight: '64px',
    letterSpacing: '-0.01em',
  },
  h2: {
    ...primaryText,
    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '48px',
    lineHeight: '56px',
    letterSpacing: '-0.02em',
  },
  h3: {
    ...primaryText,
    fontFamily: 'DM Sans',
    fontWeight: 600,
    fontSize: '40px',
    lineHeight: '40px',
    letterSpacing: '-0.01em',
  },
  h4: {
    ...primaryText,
    fontFamily: 'DM Sans',
    fontWeight: 700,
    fontSize: '32px',
    lineHeight: '40px',
    letterSpacing: '-0.01em',
  },
  li: {
    ...secondaryText,
    fontFamily: 'DM Sans',
    fontWeight: 500,
    textDecoration: 'none',
    fontSize: 'calc(10px + 4vw)',
  },
  button: {
    ...primaryText,
    fontFamily: 'DM Sans',
    fontWeight: 500,
    fontSize: '14px',
    lineHeight: '16px',
  },
  caption: {
    ...primaryText,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '14px',
    lineHeight: '24px',
  },
  secondaryCaption: {
    ...thirdText,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '12px',
    lineHeight: '20px',
  },
  primaryBody: {
    ...thirdText,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: '24px',
    lineHeight: '32px',
  },
  secondaryBody: {
    ...primaryText,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '16px',
    lineHeight: '24px',
  },
  secondaryHairline: {
    ...thirdText,
    fontFamily: 'DM Sans',
    fontWeight: 700,
    fontSize: '12px',
  },
};

export default texts;
