import React from 'react';
import PsNFTMainFilter from './dedicated/PsNFTMainFilter';
import styled from 'styled-components';
import texts from '@/styles/texts';
import { theme } from '@/styles/theme';

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

const PsNFTFilter = () => {
  return (
    <Container>
      <PsNFTMainFilter />
    </Container>
  );
};

export default PsNFTFilter;
