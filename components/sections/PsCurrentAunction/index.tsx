import React, { useEffect } from 'react';

import Image from 'next/image';

import styled from 'styled-components';
import { theme } from '@/styles/theme';

import image from '@/images/aunction-img-test.png';

import PsCurrentBid from './dedicated/PsCurrentBid';

import { usePricesState } from '@/contexts/prices';
import { useAunctionsState } from '@/contexts/all-aunctions';

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
  width: 80vw;
  position: relative;
  align-self: center;
  flex-direction: row;
  @media (max-width: 680px) {
    flex-direction: column;
    width: 100%;
  }
`;

const ImageWrapper = styled(Image)`
  width: 100%;
  height: 100%;
  position: relative;
  border-radius: 2em;
  margin-bottom: 2em;
`;

const PsCurrentAunction = () => {
  const prices = usePricesState();
  const aunctions = useAunctionsState();

  return (
    <Container>
      <Content>
        <ImageWrapper
          src={image}
          alt={'Main aunction image'}
          width={689}
          height={919}
        />
        <PsCurrentBid />
      </Content>
    </Container>
  );
};

export default PsCurrentAunction;
