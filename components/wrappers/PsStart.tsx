import React, { ElementType } from 'react';
import type { AppProps } from 'next/app';

import { useStyleUpdater } from '@/contexts/styles';
import { LayoutProps } from '@/hooks/useDeviceSize';

interface CustomAppProps<P = LayoutProps> extends AppProps<P> {
  startProps: LayoutProps;
}

const PsStarts: ElementType = ({
  Component,
  pageProps,
  startProps,
}: CustomAppProps) => {
  // set style in context
  const storeUpdater = useStyleUpdater();
  storeUpdater(['UPDATE_SIZE', startProps]);
  return (
    <Component
      {...{
        pageProps,
      }}
    />
  );
};

export default PsStarts;
