import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { theme } from '@/styles/theme';

import { AunctionsProps, useAunctionsState } from '@/contexts/all-aunctions';
import {
  filterByPrice,
  sortById,
  sortNewestFirst,
  sortOldestFirst,
} from '@/helpers';

import PsNFTMainFilter from './dedicated/PsNFTMainFilter';
import PsNFTSideFilter from './dedicated/PsNFTSideFilter';
import PsNFTList from './dedicated/organisms/PsNFTList';

// styles
const { primaryBg } = theme;

const Container = styled.div`
  ${primaryBg};
  padding: 2em;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  align-self: center;
  width: 85vw;
  @media (max-width: 680px) {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;

const PsNFTFilter = () => {
  // states
  const aunctions = useAunctionsState();

  const [filteredData, setFilteredData] = useState(aunctions);

  // newest / oldest date filter
  const addedDate = [
    { text: 'Newest', value: 1 },
    { text: 'Oldest', value: 2 },
  ];

  // set data
  useEffect(() => {
    return (() => setFilteredData(aunctions))();
  }, [aunctions]);

  // filter handlers
  const handleDateFilter = (val: number | string) => {
    const list = Object.values(aunctions as object[]);
    let sortedList;
    if (val === 1) {
      sortedList = sortNewestFirst(list);
    } else if (val === 2) {
      sortedList = sortOldestFirst(list);
    }
    return setFilteredData(
      sortedList as React.SetStateAction<[string, AunctionsProps] | null>
    );
  };

  const handleResetFilter = () => {
    const sortedList = sortById(Object.values(aunctions as object[]));
    return setFilteredData(
      sortedList as React.SetStateAction<[string, AunctionsProps] | null>
    );
  };

  const handlePriceFilter = (eth: string) => {
    const list = Object.values(aunctions as object[]);
    const filteredList = filterByPrice(list, eth);
    return setFilteredData(
      filteredList as React.SetStateAction<[string, AunctionsProps] | null>
    );
  };

  return (
    <Container>
      <PsNFTMainFilter
        dateFilterOptions={addedDate}
        handleDateFilter={handleDateFilter}
      />
      <Content>
        <PsNFTSideFilter
          handleResetFilter={handleResetFilter}
          handlePriceFilter={handlePriceFilter}
        />
        <PsNFTList aunctions={filteredData} />
      </Content>
    </Container>
  );
};

export default PsNFTFilter;
