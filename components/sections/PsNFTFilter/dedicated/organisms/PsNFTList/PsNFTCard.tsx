import React from 'react';

import styled from 'styled-components';

import Image from 'next/image';

import { theme } from '@/styles/theme';
import texts from '@/styles/texts';

import PsHorizontalDivider from '@/components/molecules/PsHorizontalDividerShort';

import iconCandlestick from '@/images/icon-candlesticks.svg';
import { AunctionsProps } from '@/contexts/all-aunctions';

// styles
const { secondaryBg, primaryText, highlight, primaryBg } = theme;
const { caption } = texts;

const Container = styled.div`
  @media (max-width: 680px) {
    padding-bottom: 1em;
  }
`;
const CardContainer = styled.div`
  ${secondaryBg};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  with: 100%;
  padding: 1em;
  border-radius: 2em;
`;

/* const ImageWrapper = styled.div`
  overflow: hidden;
  position: relative;
  height: 40vh;
  width: 100%;
  border-radius: 2em;
  margin-bottom: 1em;
`; */

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ArtTitle = styled.p`
  ${caption};
  ${primaryText};
  font-size: 16px;
`;

const ArtPriceTag = styled.div`
  ${highlight};
  border-color: ${highlight.color};
  border-width: 2px;
  border-style: solid;
  border-radius: 5px;
  padding: 0.2em;
`;

const ArtPrice = styled.p`
  ${caption};
  ${highlight};
  font-size: 12px;
`;

const Separator = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Stock = styled.p`
  ${caption};
  ${primaryText};
  font-size: 14px;
  padding-top: 0.5em;
`;

const AvatarImg = styled(Image)`
  border-radius: 2em;
  margin-left: -0.5em;
  z-index: 1;
  border-color: ${primaryBg.backgroundColor};
  border-width: 1.5px;
  border-style: solid;
`;

const Avatars = styled.div`
  padding-top: 0.5em;
`;

const BidText = styled.p`
  ${caption};
  padding-left: 0.5em;
`;

const HighestBid = styled.p`
  ${caption};
  ${primaryText};
  text-transform: uppercase;
  padding-left: 0.5em;
`;

const PsNFTCard = ({ item }: { item: AunctionsProps }) => {
  return (
    <Container>
      <CardContainer>
        <Image
          src={item.media.image}
          style={{
            objectFit: 'cover',
            borderRadius: '2em',
            paddingBottom: '1em',
          }}
          alt={'NFT Image'}
          width={260}
          height={360}
        />
        <Content>
          <Separator>
            <ArtTitle>Amazing digital art</ArtTitle>
            <ArtPriceTag>
              <ArtPrice>{item.instantPrice}</ArtPrice>
            </ArtPriceTag>
          </Separator>
          <Separator>
            <Avatars>
              <AvatarImg
                src={item.authorAvatar}
                alt={'Creator picture'}
                width={24}
                height={24}
                style={{ margin: 0 }}
              />
              <AvatarImg
                src={item.authorAvatar}
                alt={'Creator picture'}
                width={24}
                height={24}
              />
              <AvatarImg
                src={item.authorAvatar}
                alt={'Creator picture'}
                width={24}
                height={24}
              />
            </Avatars>
            <Stock>{`${item.stock} in stock`}</Stock>
          </Separator>
        </Content>
        <PsHorizontalDivider />
        <div style={{ width: '100%' }}>
          <Separator>
            <Separator>
              <Image
                src={iconCandlestick}
                alt={'Candlesticks icon'}
                width={16}
                height={16}
              />
              <Separator>
                <BidText>Highest bid: </BidText>
                <HighestBid>{item.highestBid}</HighestBid>
              </Separator>
            </Separator>
            <div>
              <BidText>New bid 🔥</BidText>
            </div>
          </Separator>
        </div>
      </CardContainer>
    </Container>
  );
};

export default PsNFTCard;
