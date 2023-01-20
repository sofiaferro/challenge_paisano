import React from 'react';

import styled from 'styled-components';

import PsSearchBar from '@/components/molecules/PsSearchBar';
import PsDropdownMenu from '@/components/molecules/PsDropdownMenu';
import PsNFTCategoryFilter from './PsNFTCategoryFilter';

// styles
const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 680px) {
    justify-content: flex-start;
    flex-direction: column;
  }
`;

const FilterContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: calc(10px + 30vw);
  @media (max-width: 680px) {
    width: 100%;
  }
`;

const PsNFTMainFilter = () => {
  // handlers
  const handleSearch = () => {
    console.log('Search');
  };

  const handleMenu = () => {
    console.log('Menu');
  };
  const handleAllItemsFilter = () => {
    console.log('All items');
  };
  const handleArtFilter = () => {
    console.log('Art');
  };
  const handlePhotographyFilter = () => {
    console.log('Photography');
  };

  return (
    <div style={{ width: '80vw', alignSelf: 'center' }}>
      <PsSearchBar placeholder={'Type your keywords'} onClick={handleSearch} />
      <Content>
        <PsDropdownMenu placeholder={'Recently added'} onClick={handleMenu} />
        <FilterContainer>
          <PsNFTCategoryFilter
            title={'All items'}
            onClick={handleAllItemsFilter}
            isActive={true}
          />
          <PsNFTCategoryFilter
            title={'Art'}
            isActive={false}
            onClick={handleArtFilter}
          />
          <PsNFTCategoryFilter
            title={'Photography'}
            isActive={false}
            onClick={handlePhotographyFilter}
          />
        </FilterContainer>
      </Content>
    </div>
  );
};

export default PsNFTMainFilter;
