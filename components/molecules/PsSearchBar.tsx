import React, { useEffect, useRef } from 'react';

import gsap from 'gsap';
import styled from 'styled-components';

import texts from '@/styles/texts';
import { theme } from '@/styles/theme';

import Image from 'next/image';

import iconSearchBar from '@/images/icon-search-bar.svg';

interface PsSearchBarProps {
  placeholder: string;
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
  style?: object;
}

// styles
const { button } = texts;
const { secondaryButton, thirdText } = theme;

const SearchBar = styled.div`
  ${button};
  ${secondaryButton};
  border-radius: 1em;
  border-style: solid;
  border-width: 2px;
  padding: 1em;
  text-align: left;
  width: 100%;
  display: flex;
  height: 52px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const SearchBarContainer = styled.div`
  padding-bottom: 2em;
  display: flex;
  width: 100%;
`;

const CustomInput = styled.input`
  ${button};
  background-color: transparent;
  border-style: none;
  width: 100%;
  outline: none;
  &:focus::placeholder {
    color: transparent;
  }
`;

const PsSearchBar = ({ placeholder, onClick, style }: PsSearchBarProps) => {
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
    <SearchBarContainer>
      <SearchBar
        onClick={(e: React.MouseEvent<HTMLDivElement>) => handleOnClick(e)}
        onMouseEnter={handleOnMouseEnter}
        onMouseLeave={handleOnMouseLeave}
        style={{ ...style }}
      >
        <CustomInput type={'search'} ref={textRef} placeholder={placeholder} />
        <Image src={iconSearchBar} alt={'Icon search bar'} />
      </SearchBar>
    </SearchBarContainer>
  );
};

export default PsSearchBar;
