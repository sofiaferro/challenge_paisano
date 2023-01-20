import React from 'react';
import styled from 'styled-components';

import { theme } from '@/styles/theme';

import { useAunctionsState } from '@/contexts/all-aunctions';
import { useAunctionsUpdater } from '@/contexts/all-aunctions';
import { sortById, sortNewestFirst, sortOldestFirst } from '@/helpers';

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
  const updater = useAunctionsUpdater();

  // newest / oldest date filter
  const addedDate = [
    { text: 'Newest', value: 1 },
    { text: 'Oldest', value: 2 },
  ];

  const handleDateFilter = (val: number | string) => {
    const list = Object.values(aunctions);
    let sortedList;
    if (val === 1) {
      sortedList = sortNewestFirst(list);
    } else if (val === 2) {
      sortedList = sortOldestFirst(list);
    }
    return updater(['UPDATE_AUCTIONS', sortedList]);
  };

  const handleResetFilter = () => {
    const sortedList = sortById(Object.values(aunctions));
    return updater(['UPDATE_AUCTIONS', sortedList]);
  };

  return (
    <Container>
      <PsNFTMainFilter
        dateFilterOptions={addedDate}
        handleDateFilter={handleDateFilter}
      />
      <Content>
        <PsNFTSideFilter resetFilter={handleResetFilter} />
        <PsNFTList aunctions={aunctions} />
      </Content>
    </Container>
  );
};

export default PsNFTFilter;
