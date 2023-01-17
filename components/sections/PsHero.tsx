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
const { firstBg } = theme;

const Container = styled.div`
  ${firstBg};
  width: 100%;
  height: 40vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  ${h1};
  padding: 0.5em;
`;

const Text = styled.p`
  ${p};
  text-transform: uppercase;
  font-size: 12px;
  @media (max-width: 680px) {
    font-size: 10px;
  }
`;

const PsHero = ({ action }: PsHeroProps) => {
  // data
  const data = {
    title: 'The new creative economy.',
    text: 'Create, explore, & SELL digital art NFTs.',
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
