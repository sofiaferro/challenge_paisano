import React, { useEffect, useRef } from 'react';

import { gsap } from 'gsap';
import styled from 'styled-components';

import Link from 'next/link';

import { theme } from '@/styles/theme';
import texts from '@/styles/texts';

interface ItemProps {
  href: URL | string;
  text: string;
}

interface PsNavbarItemProps {
  item: ItemProps;
  onClick: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

// styles
const { li } = texts;
const { thirdText } = theme;

const ItemContainer = styled.div`
  padding-left: 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  align-content: center;
`;

const StyledLink = styled(Link)`
  ${li};
  height: 2em;
  @media (min-width: 960px) {
    font-size: 14px;
    height: fit-content;
  }
`;

const PsNavbarItem = ({ item, onClick }: PsNavbarItemProps) => {
  // refs
  const textRef = useRef(null);
  const { text, href } = item;

  // animations
  gsap.defaults({ overwrite: 'auto' });

  const tl = gsap.timeline({ paused: true, reversed: true });

  useEffect(() => {
    tl.fromTo(
      textRef.current,
      {
        top: 0,
      },
      {
        ...thirdText,
        top: -5,
        duration: 0.3,
      }
    );
    return () => {
      tl.kill();
    };
  }, [tl]);

  // handlers
  const handleOnMouseEnter = () => {
    return tl.play();
  };

  const handleOnMouseLeave = () => {
    return tl.reverse();
  };

  const handleOnClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    tl.reverse();
    return onClick(e);
  };

  return (
    <ItemContainer
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
    >
      <StyledLink
        onClick={(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) =>
          handleOnClick(e)
        }
        href={href}
        ref={textRef}
      >
        {text}
      </StyledLink>
    </ItemContainer>
  );
};

export default PsNavbarItem;
