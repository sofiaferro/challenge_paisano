import React from 'react';

import styled from 'styled-components';

import texts from '@/styles/texts';
import { theme } from '@/styles/theme';

// import PsRangeInput from '@/components/molecules/PsRangeInput';

// styles
const { caption } = texts;
const { secondaryText } = theme;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 1em;
`;

const Caption = styled.p`
  ${caption};
  text-transform: uppercase;
  font-weight: 600;
`;

const RangeTag = styled.p`
  ${caption};
  ${secondaryText};
  text-transform: uppercase;
  font-weight: 600;
`;
const RangeTagContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const PsNFTPriceSlider = () => {
  // todo style across browsers
  return (
    <Container>
      <Caption>Price range</Caption>
      {/*       <PsRangeInput
        min={0}
        max={100}
        value={50}
        onChange={(event) => console.log(event.target.value)}
      /> */}
      <input type='range' />
      <RangeTagContainer>
        <RangeTag>0.01 ETH</RangeTag>
        <RangeTag>10 ETH</RangeTag>
      </RangeTagContainer>
    </Container>
  );
};

export default PsNFTPriceSlider;
