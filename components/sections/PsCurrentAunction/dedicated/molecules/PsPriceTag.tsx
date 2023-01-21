import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import { theme } from '@/styles/theme';
import texts from '@/styles/texts';

import shape from '@/images/aunction-shape-test.png';

// styles
const { backgroundHighlight } = theme;
const { caption, secondaryCaption } = texts;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 50%;
  padding: 0.5em;
  justify-content: center;
`;

const ImageWrapper = styled.div`
  ${backgroundHighlight};
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
  ${secondaryCaption};
`;

const ContentTag = styled.p`
  ${caption};
`;

const PsPriceTag = ({ instantPrice }) => {
  return (
    <Container>
      <ImageWrapper>
        <Image
          src={shape}
          alt={'Green tag with the price'}
          width={20}
          height={20}
          style={{ borderRadius: '2em' }}
        />
      </ImageWrapper>
      <TextContainer>
        <TitleTag>Instant price</TitleTag>
        <ContentTag>{instantPrice}</ContentTag>
      </TextContainer>
    </Container>
  );
};

export default PsPriceTag;
