import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import { theme } from '@/styles/theme';
import texts from '@/styles/texts';

import shape from '@/images/auction-shape-test.png';

// styles
const { highlight, primaryText } = theme;
const { caption } = texts;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 50%;
  padding: 0.5em;
  justify-content: center;
`;

const ImageContainer = styled.div`
  ${highlight};
  border-radius: 2em;
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  padding-left: 0.5em;
`;

const TitleTag = styled.p`
  ${caption};
`;

const ContentTag = styled.p`
  ${caption};
  ${primaryText};
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
`;

const PsPriceTag = () => {
  return (
    <Container>
      <ImageContainer>
        <Image
          src={shape}
          alt={'Green tag with the price'}
          width={20}
          height={20}
          style={{ borderRadius: '2em' }}
        />
      </ImageContainer>
      <TextContainer>
        <TitleTag>Instant price</TitleTag>
        <ContentTag>3.5 ETH</ContentTag>
      </TextContainer>
    </Container>
  );
};

export default PsPriceTag;
