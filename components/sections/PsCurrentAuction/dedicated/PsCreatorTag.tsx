import React from 'react';

import styled from 'styled-components';

import Image from 'next/image';

import texts from '@/styles/texts';
import { theme } from '@/styles/theme';

import avatar from '@/images/auction-avatar-test.png';

// styles
const { caption } = texts;
const { primaryText } = theme;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 50%;
  padding: 0.5em;
  justify-content: center;
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

const PsCreatorTag = () => {
  return (
    <Container>
      <div>
        <Image
          src={avatar}
          alt={'Creator picture'}
          width={32}
          height={32}
          style={{ borderRadius: '2em' }}
        />
      </div>
      <TextContainer>
        <TitleTag>Creator</TitleTag>
        <ContentTag>Enrico Cole</ContentTag>
      </TextContainer>
    </Container>
  );
};

export default PsCreatorTag;
