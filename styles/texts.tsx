import { theme } from './theme';

const { primaryText, secondaryText, thirdText } = theme;

const texts = {
  h1: {
    ...primaryText,
    fontFamily: 'DM Sans',
    fontWeight: '600',
    fontSize: '2em',
    lineHeight: '40px',
    letterSpacing: '-0.01em',
  },
  h2: {
    fontFamily: 'Lato',
    fontSize: 'calc(10px + 2vw)',
    textDecoration: 'none',
  },
  h3: {
    fontFamily: 'Lato',
    fontSize: 'calc(10px + 1vw)',
    textDecoration: 'none',
  },
  p: {
    ...secondaryText,
    fontFamily: 'DM Sans',
    fontWeight: '700',
    fontSize: 'calc(10px + 1vw)',
  },
  li: {
    ...secondaryText,
    fontFamily: 'DM Sans',
    fontWeight: '500',
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
    ...thirdText,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '12px',
  },
};

export default texts;
