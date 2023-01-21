import React, { useEffect, useRef } from 'react';

import styled from 'styled-components';

import { theme } from '@/styles/theme';
import texts from '@/styles/texts';

import PsButton from '../molecules/PsButton';
import gsap from 'gsap';

interface PsHeroProps {
  action: () => void;
}

// styles
const { h3, h4, secondaryHairline } = texts;
const { primaryBg } = theme;

const Container = styled.div`
  ${primaryBg};
  width: 100%;
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2em;
  justify-content: center;
  @media (max-width: 680px) {
    height: 40vh;
  }
`;

const Content = styled.div`
  top: 50px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h3`
  ${h3};
  padding: 0.5em;
  text-align: center;
  @media (max-width: 680px) {
    ${h4};
  }
`;

const Text = styled.p`
  ${secondaryHairline};
  text-align: center;
  text-transform: uppercase;
  @media (max-width: 680px) {
    font-size: 10px;
  }
`;

const PsHero = ({ action }: PsHeroProps) => {
  // refs
  const heroRef = useRef(null);
  const heroChildren = (heroRef.current as unknown as HTMLUListElement)
    ?.children;

  // animations
  gsap.defaults({ overwrite: 'auto' });
  const tl = gsap.timeline();

  useEffect(() => {
    tl.fromTo(
      heroChildren,
      {
        y: -30,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 1,
      }
    );
    tl.play();
    return () => {
      tl.kill;
    };
  }, [tl, heroChildren]);

  // data
  const data = {
    text: 'The new creative economy.',
    title: 'Create, explore, & SELL digital art NFTs.',
  };
  return (
    <Container ref={heroRef}>
      <Content>
        <Text>{data.title}</Text>
        <Title>{data.text}</Title>
        <PsButton title={'Explore'} onClick={action} />
      </Content>
    </Container>
  );
};

export default PsHero;
