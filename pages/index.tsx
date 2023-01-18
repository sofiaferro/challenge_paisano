import React from 'react';

import PsHero from '@/components/sections/PsHero';
import PsCurrentAuction from '@/components/sections/PsCurrentAuction';
import PsNFTFilter from '@/components/sections/PsNFTFilter';

export default function Home() {
  return (
    <div>
      <PsHero action={() => console.log('Explore')} />
      <PsCurrentAuction />
      <PsNFTFilter />
    </div>
  );
}
