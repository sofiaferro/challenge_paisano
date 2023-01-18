import React from 'react';

import Image from 'next/image';

import styled from 'styled-components';
import { theme } from '@/styles/theme';

import image from '@/images/auction-img-test.png';

import PsCurrentBid from './dedicated/PsCurrentBid';

// styles
const { firstBg } = theme;

const Container = styled.div`
  ${firstBg};
  display: flex;
  padding: 2em;
  width: 100%;
  flex-direction: row;
  @media (max-width: 680px) {
    flex-direction: column;
  }
`;

const ImageContainer = styled.div`
  overflow: hidden;
  position: relative;
  height: 60vw;
  width: 100%;
  border-radius: 2em;
  margin-bottom: 2em;
`;

const PsCurrentAuction = () => {
  return (
    <Container>
      <ImageContainer>
        <Image
          src={image}
          alt={'Main auction image'}
          fill
          style={{ objectFit: 'cover' }}
        />
      </ImageContainer>
      <PsCurrentBid />
    </Container>
  );
};

export default PsCurrentAuction;
