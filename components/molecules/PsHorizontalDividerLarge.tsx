import React from 'react';

import styled from 'styled-components';

import Image from 'next/image';

import dividerHorizontal from '@/images/divider-horizontal-desktop.svg';

// style
const Container = styled.div`
  padding-bottom: 1em;
  width: 100%;
  overflow: hidden;
`;

const PsHorizontalDivider = () => {
  return (
    <Container>
      <Image src={dividerHorizontal} alt={'Horizontal divider'} />
    </Container>
  );
};

export default PsHorizontalDivider;
