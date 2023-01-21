import React, { useState } from 'react';

import Image from 'next/image';

import styled from 'styled-components';
import { theme } from '@/styles/theme';

import PsCurrentBid from './dedicated/molecules/PsCurrentBid';

import { PricesProps, usePricesState } from '@/contexts/prices';
import { usePopularAunctionsState } from '@/contexts/popular-aunctions';

import arrowLeft from '@/images/arrow-left.png';
import arrowRight from '@/images/arrow-right.png';
import { AunctionsProps } from '@/contexts/all-aunctions';

// styles
const { primaryBg, thirdText } = theme;

const Container = styled.div`
  ${primaryBg};
  padding: 2em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  display: flex;
  width: 85vw;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media (max-width: 680px) {
    flex-direction: column;
    width: 100%;
  }
`;

const Arrows = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 2em;
  @media (max-width: 680px) {
    justify-content: center;
  }
`;

const ArrowImage = styled.div`
  ${thirdText};
  width: 32px;
  height: 32px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5em;
`;

const PsCurrentAunction = () => {
  // get states
  const prices = usePricesState();
  const pop = usePopularAunctionsState();

  // set index
  const [index, setIndex] = useState(0);

  // handlers
  const handleNextItem = () => {
    if (index >= Object.values(pop).length - 1) return setIndex(0);
    setIndex((pre) => pre + 1);
  };

  const handlePrevItem = () => {
    if (index <= 0) return setIndex(Object.values(pop).length - 1);
    setIndex((pre) => pre - 1);
  };

  const currentAu = Object.values(pop)[index] as AunctionsProps;
  return (
    <Container>
      <Content>
        <Image
          src={currentAu.media.image}
          alt={'Main aunction image'}
          width={350}
          height={551}
          style={{
            borderRadius: '2em',
            paddingBottom: '1em',
            objectFit: 'cover',
          }}
        />
        <PsCurrentBid
          pop={currentAu}
          prices={prices as unknown as PricesProps}
        />
      </Content>
      <Arrows>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          <ArrowImage onClick={handlePrevItem}>
            <Image src={arrowLeft} alt={'Left arrow'} />
          </ArrowImage>
          <ArrowImage onClick={handleNextItem}>
            <Image src={arrowRight} alt={'Right arrow'} />
          </ArrowImage>
        </div>
      </Arrows>
    </Container>
  );
};

export default PsCurrentAunction;
