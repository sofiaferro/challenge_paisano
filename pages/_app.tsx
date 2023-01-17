import React from 'react';

import '@/styles/globals.css';

import type { AppProps } from 'next/app';
import Head from 'next/head';

import { useDeviceSize } from '@/hooks';
import { StylesProvider } from '@/styles/context';

import PsNavBar from '@/components/sections/PsNavbar';
import PsStart from '@/components/wrappers/PsStart';

export default function MyApp({ Component, pageProps }: AppProps) {
  const startProps = useDeviceSize();
  return (
    <StylesProvider>
      <Head>
        <title>NFT Paisanos</title>{' '}
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <PsNavBar />
      <PsStart {...{ Component, pageProps, startProps }} />;
    </StylesProvider>
  );
}
