import React from 'react';

import styled from 'styled-components';

import { theme } from '@/styles/theme';
import texts from '@/styles/texts';

import PsButton from '../molecules/PsButton';

interface PsHeroProps {
  action: () => void;
}

// styles
const { h1, p } = texts;
const { firstBg, thirdText } = theme;

const Container = styled.div`
  ${firstBg};
  width: 100%;
  height: 40vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2em;
  justify-content: center;
  @media (max-width: 680px) {
    height: 25vh;
  }
`;

const Title = styled.h1`
  ${h1};
  padding: 0.5em;
  text-align: center;
`;

const Text = styled.p`
  ${p};
  ${thirdText};
  text-transform: uppercase;
  font-size: 12px;
  @media (max-width: 680px) {
    font-size: 10px;
  }
`;

const PsHero = ({ action }: PsHeroProps) => {
  // data
  const data = {
    text: 'The new creative economy.',
    title: 'Create, explore, & SELL digital art NFTs.',
  };
  return (
    <Container>
      <Text>{data.title}</Text>
      <Title>{data.text}</Title>
      <PsButton title={'Explore'} onClick={action} />
    </Container>
  );
};

export default PsHero;
