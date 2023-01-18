import React, { useEffect, useRef } from 'react';

import gsap from 'gsap';
import styled from 'styled-components';

import texts from '@/styles/texts';
import { theme } from '@/styles/theme';

import Image from 'next/image';

import iconChevron from '@/images/icon-chevron.svg';

interface PsDropdownMenuProps {
  placeholder: string;
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
  style?: object;
}

// styles
const { button } = texts;
const { secondaryButton, thirdText } = theme;

const DropdownMenu = styled.div`
  ${button};
  ${secondaryButton};
  border-radius: 1em;
  border-style: solid;
  border-width: 2px;
  padding: 1em;
  text-align: left;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 52px;
  justify-content: space-between;
`;

const DropdownMenuContainer = styled.div`
  padding-bottom: 2em;
  display: flex;
  width: calc(10px + 25vw);
  @media (max-width: 680px) {
    width: 100%;
  }
`;
const ImageContainer = styled.div`
  ${thirdText};
  border-radius: 1em;
  border-style: solid;
  border-width: 2px;
  height: 2em;
  width: 2em;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const PsDropdownMenu = ({
  placeholder,
  onClick,
  style,
}: PsDropdownMenuProps) => {
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
    <DropdownMenuContainer>
      <DropdownMenu
        onClick={(e: React.MouseEvent<HTMLDivElement>) => handleOnClick(e)}
        onMouseEnter={handleOnMouseEnter}
        onMouseLeave={handleOnMouseLeave}
        style={{ ...style }}
      >
        <p ref={textRef}>{placeholder}</p>
        <ImageContainer>
          <Image src={iconChevron} alt={'Icon search bar'} />
        </ImageContainer>
      </DropdownMenu>
    </DropdownMenuContainer>
  );
};

export default PsDropdownMenu;
