import React from 'react';
import styled from 'styled-components';

import PsNFTCard from './PsNFTCard';
import PsLoadButton from '@/components/molecules/PsLoadButton';

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

const PsNFTList = ({ aunctions }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Content>
        {Object.values(aunctions).map((item) => (
          <CardWrapper key={`key_all_aunctions_${item.id}`}>
            <PsNFTCard item={item} />
          </CardWrapper>
        ))}
      </Content>
      <div style={{ alignSelf: 'center' }}>
        <PsLoadButton title={'Load more'} />
      </div>
    </div>
  );
};

export default PsNFTList;
