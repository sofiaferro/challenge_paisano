import React from 'react';

import { theme } from '@/styles/theme';
import texts from '@/styles/texts';

import styled from 'styled-components';

import {
  formatEndDate,
  formatETHString,
  formatRawUsd,
  formattedConversion,
} from '@/helpers';

import PsButton from '@/components/molecules/PsButton';
import PsCreatorTag from './PsCreatorTag';
import PsPriceTag from './PsPriceTag';

import { AunctionsProps } from '@/contexts/all-aunctions';
import { PricesProps } from '@/contexts/prices';

// styles
const { h1, h2, h4, secondaryBody, primaryBody } = texts;
const { primaryBg, secondaryBg, thirdText, button } = theme;

const Container = styled.div`
  ${primaryBg};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  @media (min-width: 680px) {
    width: auto;
    padding-left: 2em;
    padding-right: 2em;
  }
`;

const Header = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  width: 400px;
  @media (max-width: 680px) {
    width: 100%;
  }
`;

const Tags = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: row;
  padding-bottom: 1em;
`;

const Body = styled.div`
  ${secondaryBg};
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 2em;
  padding: 1em;
  width: 325px;
  @media (max-width: 680px) {
    width: 100%;
  }
`;

const TimeContainer = styled.div`
  width: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: row;
  padding-bottom: 1em;
`;

const ArtistName = styled.h1`
  ${h1};
  height: max-content;
  text-align: left;
  align-self: flex-start;
  padding-bottom: 0.5em;
@media (max-width: 680px) {
  font-size: 4em;
  line-height: 64px;
}
}`;

const Button = styled(PsButton)`
  width: 100%;
  padding-bottom: 1em;
`;

const Footer = styled.div`
  padding-top: 2em;
  width: 400px;
  @media (max-width: 680px) {
    width: 100%;
  }
`;

const AunctionEnding = styled.p`
  ${secondaryBody};
`;

const ItemContainer = styled.div`
  padding-left: 1em;
  padding-right: 1em;
`;

const Amount = styled.h4`
  ${h4}
`;

const Time = styled.h4`
  ${secondaryBody};
  ${thirdText};
`;

const CurrentETH = styled.h2`
  ${h2};
`;

const CurrentUSD = styled.h1`
  ${primaryBody}
  padding-bottom: 1em;
`;

const PsCurrentBid = ({
  pop,
  prices,
}: {
  pop: AunctionsProps;
  prices: PricesProps;
}) => {
  // format end date
  const endsAt = formatEndDate(pop.endsAt);

  // format currency
  const highestBid = formatETHString(pop.highestBid);
  const rawUsd = formatRawUsd(prices.usd);
  const conversion = formattedConversion(rawUsd * highestBid);

  return (
    <Container>
      <Header>
        <ArtistName>the creator network®</ArtistName>
        <Tags>
          <PsCreatorTag authorAvatar={pop.authorAvatar} author={pop.author} />
          <PsPriceTag instantPrice={pop.instantPrice} />
        </Tags>
      </Header>
      <Body>
        <AunctionEnding>Highest bid</AunctionEnding>
        <CurrentETH>{pop.highestBid}</CurrentETH>
        <CurrentUSD>{`$${conversion}`}</CurrentUSD>
        <AunctionEnding>Aunction ending on</AunctionEnding>
        <TimeContainer>
          <ItemContainer>
            <Amount>{endsAt.month}</Amount>
            <Time>month</Time>
          </ItemContainer>
          <ItemContainer>
            <Amount>{endsAt.day}</Amount>
            <Time>day</Time>
          </ItemContainer>
          <ItemContainer>
            <Amount>{endsAt.year}</Amount>
            <Time>year</Time>
          </ItemContainer>
        </TimeContainer>
      </Body>
      <Footer>
        <Button
          containerStyle={{ width: '100%' }}
          buttonStyle={{ ...button, borderColor: 'transparent' }}
          title={'Place a bid'}
          onClick={() => console.log('Place a bid')}
        />
        <Button
          containerStyle={{ width: '100%' }}
          title={'View item'}
          onClick={() => console.log('View item')}
        />
      </Footer>
    </Container>
  );
};

export default PsCurrentBid;
