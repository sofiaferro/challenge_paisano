import React from 'react';
import '@/styles/globals.css';

import type { AppProps } from 'next/app';
import Head from 'next/head';

import { StylesProvider } from '@/contexts/styles';
import { PricesProvider } from '@/contexts/prices';
import { AunctionsProvider } from '@/contexts/all-aunctions';
import { PopularAunctionsProvider } from '@/contexts/popular-aunctions';

import { breakPoints, useDeviceSize, findDevice } from '@/hooks/useDeviceSize';

import PsNavBar from '@/components/sections/PsNavbar';
import PsFooter from '@/components/sections/PsFooter';
import PsStart from '@/components/wrappers/PsStart';

export default function MyApp({ Component, pageProps }: AppProps) {
  // get layout and device
  const size = useDeviceSize();
  const width = size.width as unknown as number;
  const device = findDevice(breakPoints, width);
  return (
    <StylesProvider>
      <PricesProvider>
        <AunctionsProvider>
          <PopularAunctionsProvider>
            <Head>
              <title>NFT Paisanos</title>
              <meta
                name='viewport'
                content='width=device-width, initial-scale=1'
              />
            </Head>
            <PsNavBar />
            <PsStart
              {...{ Component, pageProps, startProps: { size, device } }}
            />
            <PsFooter />
          </PopularAunctionsProvider>
        </AunctionsProvider>
      </PricesProvider>
    </StylesProvider>
  );
}
