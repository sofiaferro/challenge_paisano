import React from 'react';

import PsHero from '@/components/sections/PsHero';
import PsCurrentAuction from '@/components/sections/PsCurrentAuction';

export default function Home() {
  return (
    <div>
      <PsHero action={() => console.log('Explore')} />
      <PsCurrentAuction />
    </div>
  );
}
