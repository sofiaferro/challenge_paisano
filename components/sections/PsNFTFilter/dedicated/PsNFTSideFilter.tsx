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

// styles
const { secondaryHairline, button } = texts;
const { firstBg } = theme;

const Container = styled.div`
  ${firstBg};
  display: flex;
  flex-direction: column;
  width: 100%;
  @media (min-width: 680px) {
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

const PsNFTSideFilter = () => {
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
      <div
        style={{
          paddingBottom: '2em',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <PsNFTCard />
        <PsLoadButton title={'Load more'} />
      </div>
    </Container>
  );
};

export default PsNFTSideFilter;
