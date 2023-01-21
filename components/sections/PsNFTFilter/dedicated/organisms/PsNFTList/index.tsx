import React from 'react';
import styled from 'styled-components';

import PsNFTCard from './PsNFTCard';
import PsLoadButton from '@/components/molecules/PsLoadButton';
import { AunctionsProps } from '@/contexts/all-aunctions';

interface ItemProps {
  aunctions: object[];
}

// styles
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

const PsNFTList = ({ aunctions }: ItemProps) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Content>
        {Object.values(aunctions).map((item) => (
          <CardWrapper key={`key_all_aunctions_${(item as AunctionsProps).id}`}>
            <PsNFTCard item={item as AunctionsProps} />
          </CardWrapper>
        ))}
      </Content>
      <div style={{ alignSelf: 'center' }}>
        <PsLoadButton
          title={'Load more'}
          onClick={() => console.log('Load more NFTs')}
        />
      </div>
    </div>
  );
};

export default PsNFTList;
