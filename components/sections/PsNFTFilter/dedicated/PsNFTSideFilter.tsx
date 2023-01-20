import React from 'react';

import styled from 'styled-components';

import Image from 'next/image';

import texts from '@/styles/texts';
import { theme } from '@/styles/theme';

import PsNFTPriceSlider from './molecules/PsNFTPriceSlider';
import PsDropdownMenu from '@/components/molecules/PsDropdownMenu';

import iconCross from '@/images/icon-cross.svg';
import PsHorizontalDivider from '@/components/molecules/PsHorizontalDividerShort';

interface SideFilterProps {
  resetFilter: () => void;
}

// styles
const { secondaryHairline, button } = texts;
const { primaryBg } = theme;

const Container = styled.div`
  ${primaryBg};
  display: flex;
  flex-direction: column;
  width: 50%;
  @media (max-width: 680px) {
    width: 100%;
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

const PsNFTSideFilter = ({ resetFilter }: SideFilterProps) => {
  // filter options
  const likes = [
    { text: 'Most liked', value: 1 },
    { text: 'Least liked', value: 1 },
  ];

  const colors = [
    { text: 'All colors', value: 1 },
    { text: 'Green', value: 1 },
    { text: 'Pink', value: 1 },
    { text: 'Purple', value: 1 },
  ];

  return (
    <Container>
      <PsNFTPriceSlider />
      <PsHorizontalDivider />
      <div>
        <Caption>Likes</Caption>
        <PsDropdownMenu
          defaultPlaceholder={'Likes'}
          options={likes}
          onChange={() => console.log('Most liked')}
        />
      </div>
      <div>
        <Caption>Open</Caption>
        <PsDropdownMenu
          defaultPlaceholder={'Colors'}
          options={colors}
          onChange={() => console.log('Colors')}
        />
      </div>
      <PsHorizontalDivider />
      <ResetFilterContainer onClick={resetFilter}>
        <Image src={iconCross} width={16} height={16} alt={'Cross icon'} />
        <ResetFilter>Reset filter</ResetFilter>
      </ResetFilterContainer>
    </Container>
  );
};

export default PsNFTSideFilter;
