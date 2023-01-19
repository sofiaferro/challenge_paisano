import React from 'react';
import styled from 'styled-components';

import { theme } from '@/styles/theme';
import texts from '@/styles/texts';

import Image from 'next/image';
import logo from '@/images/logo.png';

import PsHorizontalDivider from '../molecules/PsHorizontalDividerLarge';

// styles
const { secondBg, primaryText } = theme;
const { primaryBody, secondaryCaption, secondaryBody } = texts;

const Container = styled.div`
  ${secondBg};
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 2em;
`;
const ImageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 2em;
  padding-bottom: 2em;
  @media (min-width: 680px) {
    justify-content: center;
  }
`;

const Text = styled.p`
  ${primaryBody};
  ${primaryText};
  font-weight: 400;
  padding-bottom: 2em;
  text-align: center;
  @media (max-width: 680px) {
    width: 50%;
    ${secondaryBody}
    text-align: left;
  }
`;

const Copyright = styled.p`
  ${secondaryCaption};
  text-align: center;
`;

const PsFooter = () => {
  return (
    <Container>
      <ImageWrapper>
        <Image src={logo} alt='NFTPaisanos logo' />
      </ImageWrapper>
      <Text>The New Creative Economy.</Text>
      <PsHorizontalDivider />
      <Copyright>Created with ❤ by sofi 👩‍💻👾</Copyright>
    </Container>
  );
};

export default PsFooter;
