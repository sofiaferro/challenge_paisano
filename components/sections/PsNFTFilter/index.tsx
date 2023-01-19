import React from 'react';
import PsNFTMainFilter from './dedicated/PsNFTMainFilter';
import styled from 'styled-components';
import { theme } from '@/styles/theme';
import PsNFTSideFilter from './dedicated/PsNFTSideFilter';

// styles
const { firstBg } = theme;

const Container = styled.div`
  ${firstBg};
  padding: 2em;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  position: relative;
  align-self: center;
  @media (max-width: 680px) {
    width: 100%;
  }
`;

const PsNFTFilter = () => {
  return (
    <Container>
      <Content>
        <PsNFTMainFilter />
        <PsNFTSideFilter />
      </Content>
    </Container>
  );
};

export default PsNFTFilter;
