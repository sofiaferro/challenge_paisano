import React, { useState } from 'react';

import styled from 'styled-components';

import texts from '@/styles/texts';
import { theme } from '@/styles/theme';

interface InputRangeProps {
  handlePriceFilter: (eth: string) => void;
}

// styles
const { caption } = texts;
const { secondaryText, thirdBg } = theme;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 1em;
  width: 311px;
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

const Buble = styled.div`
  ${thirdBg};
  ${caption};
  color: #000;
  text-transform: uppercase;
  position: relative;
  width: max-content;
  border-radius: 1em;
  padding: 10px;
  margin: 2px;
`;

const PsNFTPriceSlider = ({ handlePriceFilter }: InputRangeProps) => {
  // todo style custom input range component across browsers
  const [rangeval, setRangeval] = useState('5');

  // handlers
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    return setRangeval((e.target as HTMLInputElement).value);
  };
  const handleOnFinish = (e: React.FormEvent<HTMLInputElement>) => {
    return handlePriceFilter((e.target as HTMLInputElement).value);
  };

  return (
    <Container>
      <Caption>Price range</Caption>
      <Buble className='buble'>
        <p>{`${rangeval} ETH`}</p>
      </Buble>
      <input
        type='range'
        className='custom-range'
        min='0.1'
        step='0.1'
        max='11'
        onChange={handleChange}
        onMouseUp={handleOnFinish}
        onTouchEnd={handleOnFinish}
      />

      <RangeTagContainer>
        <RangeTag>0.01 ETH</RangeTag>
        <RangeTag>11 ETH</RangeTag>
      </RangeTagContainer>
    </Container>
  );
};

export default PsNFTPriceSlider;
