import React from 'react';

import styled from 'styled-components';

import Image from 'next/image';

import dividerVertical from '@/images/divider-vertical.svg';

// style
const Container = styled.div`
  padding: 1em;
`;

const PsHorizontalDivider = () => {
  return (
    <Container>
      <Image src={dividerVertical} alt={'Vertical divider'} />
    </Container>
  );
};

export default PsHorizontalDivider;
