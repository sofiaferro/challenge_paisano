import React from 'react';

import styled from 'styled-components';

import Image from 'next/image';

import texts from '@/styles/texts';
import { theme } from '@/styles/theme';

import PsNFTPriceSlider from './PsNFTPriceSlider';
import PsDropdownMenu from '@/components/molecules/PsDropdownMenu';

import iconCross from '@/images/icon-cross.svg';
import PsHorizontalDivider from '@/components/molecules/PsHorizontalDividerShort';
import PsNFTCard from './PsNFTCard';
import PsLoadButton from '@/components/molecules/PsLoadButton';
import { useAunctionsState } from '@/contexts/all-aunctions';

// styles
const { secondaryHairline, button } = texts;
const { primaryBg } = theme;

const Container = styled.div`
  ${primaryBg};
  display: flex;
  flex-direction: column;
  width: 100%;
  @media (min-width: 680px) {
    width: 85vw;
    flex-direction: row;
  }
`;

const Caption = styled.p`
  ${secondaryHairline};
  text-transform: uppercase;
`;
const ResetFilter = styled.p`
  ${button};
  padding-left: 1em;
`;

const ResetFilterContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding-top: 1em;
  padding-bottom: 2em;
`;

const CardWrapper = styled.div``;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
  padding-bottom: 2em;
`;

const PsNFTSideFilter = () => {
  const aunctions = useAunctionsState();

  return (
    <Container>
      <div>
        <PsNFTPriceSlider />
        <PsHorizontalDivider />
        <div>
          <Caption>Likes</Caption>
          <PsDropdownMenu
            placeholder='Most liked'
            onClick={() => console.log('Most liked')}
          />
        </div>
        <div>
          <Caption>Open</Caption>
          <PsDropdownMenu
            placeholder='Colors'
            onClick={() => console.log('Colors')}
          />
        </div>
        <PsHorizontalDivider />
        <ResetFilterContainer>
          <Image src={iconCross} width={16} height={16} alt={'Cross icon'} />
          <ResetFilter>Reset filter</ResetFilter>
        </ResetFilterContainer>
      </div>
      <div style={{display:'flex', flexDirection:'column'}}>

      <Content>
        {Object.values(aunctions).map((item) => (
          <CardWrapper key={`key_all_aunctions_${item.id}`}>
            <PsNFTCard item={item} />
          </CardWrapper>
        ))}}
      </Content>
      <div style={{alignSelf: 'center'}}>

        <PsLoadButton title={'Load more'} />
      </div>
        </div>
    </Container>
  );
};

export default PsNFTSideFilter;
