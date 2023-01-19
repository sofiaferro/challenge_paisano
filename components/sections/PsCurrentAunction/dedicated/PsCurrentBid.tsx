import React from 'react';

import { theme } from '@/styles/theme';
import texts from '@/styles/texts';

import styled from 'styled-components';

import Image from 'next/image';
import arrowLeft from '@/images/arrow-left.png';
import arrowRight from '@/images/arrow-right.png';

import PsButton from '@/components/molecules/PsButton';
import PsCreatorTag from './PsCreatorTag';
import PsPriceTag from './PsPriceTag';

// styles
const { h1, h2, h4, secondaryBody, primaryBody } = texts;
const { firstBg, secondBg, thirdText, button } = theme;

const Container = styled.div`
  ${firstBg};
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  @media (min-width: 680px) {
    padding-left: 2em;
    padding-right: 2em;
  }
`;

const Header = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

const Tags = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: row;
  padding-bottom: 1em;
`;

const Body = styled.div`
  ${secondBg};
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 2em;
  padding: 1em;
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
  width: 100%;
  padding-top: 2em;
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

const Arrows = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 2em;
  @media (max-width: 680px) {
    justify-content: center;
  }
`;

const ArrowImage = styled.div`
  ${thirdText};
  width: 32px;
  height: 32px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5em;
`;

// data
const data = {
  artist_name: 'the creator network®',
  current_bid_eth: '1.00 ETH',
  current_bid_usd: '$3,618.36',
  remaining_time: {
    hrs: '19',
    mins: '24',
    secs: '19',
  },
};

const PsCurrentBid = () => {
  return (
    <Container>
      <Header>
        <ArtistName>{data.artist_name}</ArtistName>
        <Tags>
          <PsCreatorTag />
          <PsPriceTag />
        </Tags>
      </Header>
      <Body>
        <AunctionEnding>Current bid</AunctionEnding>
        <CurrentETH>{data.current_bid_eth}</CurrentETH>
        <CurrentUSD>{data.current_bid_usd}</CurrentUSD>
        <AunctionEnding>Aunction ending in</AunctionEnding>
        <TimeContainer>
          <ItemContainer>
            <Amount>{data.remaining_time.hrs}</Amount>
            <Time>hrs</Time>
          </ItemContainer>
          <ItemContainer>
            <Amount>{data.remaining_time.mins}</Amount>
            <Time>mins</Time>
          </ItemContainer>
          <ItemContainer>
            <Amount>{data.remaining_time.secs}</Amount>
            <Time>secs</Time>
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
        <Arrows>
          <ArrowImage>
            <Image src={arrowLeft} alt={'Left arrow'} />
          </ArrowImage>
          <ArrowImage
            style={{
              marginLeft: '1em',
              borderStyle: 'solid',
              borderWidth: '1px',
            }}
          >
            <Image src={arrowRight} alt={'Right arrow'} />
          </ArrowImage>
        </Arrows>
      </Footer>
    </Container>
  );
};

export default PsCurrentBid;
