import React from 'react';
import axios from 'axios';

import type { AppProps } from 'next/app';

import { usePricesUpdater } from '@/contexts/prices';
import { useAunctionsUpdater } from '@/contexts/all-aunctions';
import { usePopularAunctionsUpdater } from '@/contexts/popular-aunctions';

import PsHero from '@/components/sections/PsHero';
import PsCurrentAunction from '@/components/sections/PsCurrentAunction';
import PsNFTFilter from '@/components/sections/PsNFTFilter';

export default function Home({ pageProps }: AppProps) {
  // destructure data from server
  const { pricesData, aunctionsData, popularAunctionsData } = pageProps;

  // set the data in the context
  // prices
  const pricesUpdater = usePricesUpdater();
  pricesUpdater(['UPDATE_PRICES', pricesData]);

  // all aunctions
  const aunctionsUpdater = useAunctionsUpdater();
  aunctionsUpdater(['UPDATE_AUCTIONS', aunctionsData]);

  // popular aunctions
  const popularAunctionsUpdater = usePopularAunctionsUpdater();
  popularAunctionsUpdater(['UPDATE_POPULAR_AUCTIONS', popularAunctionsData]);

  return (
    <div>
      <PsHero action={() => console.log('Explore')} />
      <PsCurrentAunction />
      <PsNFTFilter />
    </div>
  );
}

export async function getServerSideProps() {
  axios.defaults.headers.common['header_name'] = 'apiKey';

  // get prices data
  const prices = await axios.get(
    `${process.env.BASE_URL}/nfpaisanos/eth-price`,
    {
      headers: {
        apiKey: `${process.env.API_KEY}`,
        'Access-Control-Allow-Origin': '*',
        mode: 'no-cors',
      },
    }
  );
  const pricesData = JSON.parse(JSON.stringify(prices.data));

  // get aunctions
  const aunctions = await axios.get(
    `${process.env.BASE_URL}/nfpaisanos/aunctions`,
    {
      headers: {
        apiKey: `${process.env.API_KEY}`,
        'Access-Control-Allow-Origin': '*',
        mode: 'no-cors',
      },
    }
  );
  const aunctionsData = JSON.parse(JSON.stringify(aunctions.data));

  // get most popular aunctions
  const popularAunctions = await axios.get(
    `${process.env.BASE_URL}/nfpaisanos/popular`,
    {
      headers: {
        apiKey: `${process.env.API_KEY}`,
        'Access-Control-Allow-Origin': '*',
        mode: 'no-cors',
      },
    }
  );
  const popularAunctionsData = JSON.parse(
    JSON.stringify(popularAunctions.data)
  );
  return {
    props: { pricesData, aunctionsData, popularAunctionsData },
  };
}
