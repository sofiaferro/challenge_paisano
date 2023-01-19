import React, { useEffect, useRef } from 'react';

import gsap from 'gsap';
import styled from 'styled-components';

import texts from '@/styles/texts';
import { theme } from '@/styles/theme';

import Image from 'next/image';

import iconLoading from '@/images/icon-loading.svg';

interface PsLoadButtonProps {
  title: string;
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
  style?: object;
}

// styles
const { button } = texts;
const { secondaryButton, thirdText } = theme;

const LoadButton = styled.div`
  ${button};
  ${secondaryButton};
  border-radius: 2em;
  border-style: solid;
  border-width: 2px;
  padding: 1em;
  text-align: left;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 52px;
  justify-content: center;
`;

const LoadButtonContainer = styled.div`
  display: flex;
  width: calc(10px + 25vw);
  @media (max-width: 680px) {
    width: 100%;
  }
`;
const Title = styled.p`
  padding-left: 0.5em;
`;

const PsLoadButton = ({ title, onClick, style }: PsLoadButtonProps) => {
  // refs
  const textRef = useRef(null);

  // animations
  gsap.defaults({ overwrite: 'auto' });
  const tl = gsap.timeline({ paused: true, reversed: true });

  useEffect(() => {
    tl.to(textRef.current, {
      ...thirdText,
      duration: 0.1,
    });
    return () => {
      tl.kill;
    };
  }, [tl]);

  // handlers
  const handleOnMouseEnter = () => {
    return tl.play();
  };

  const handleOnMouseLeave = () => {
    return tl.reverse();
  };

  const handleOnClick = (e: React.MouseEvent<HTMLDivElement>) => {
    (e as React.MouseEvent<HTMLDivElement>).preventDefault();
    tl.reverse();
    return onClick(e);
  };

  return (
    <LoadButtonContainer>
      <LoadButton
        onClick={(e: React.MouseEvent<HTMLDivElement>) => handleOnClick(e)}
        onMouseEnter={handleOnMouseEnter}
        onMouseLeave={handleOnMouseLeave}
        style={{ ...style }}
      >
        <Image src={iconLoading} alt={'Icon search bar'} />

        <Title ref={textRef}>{title}</Title>
      </LoadButton>
    </LoadButtonContainer>
  );
};

export default PsLoadButton;
