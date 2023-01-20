import React, { useEffect, useRef } from 'react';

import gsap from 'gsap';
import styled from 'styled-components';

import texts from '@/styles/texts';
import { theme } from '@/styles/theme';

interface PsNFTCategoryFilterProps {
  title: string;
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
  style?: object;
  isActive: boolean;
}

// styles
const { button } = texts;
const { fourthText, thirdButton, primaryBg, thirdText } = theme;

const Button = styled.div`
  ${button};
  ${thirdButton};
  border-radius: 2em;
  border-style: solid;
  border-width: 2px;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  text-align: center;
`;

const ButtonContainer = styled.div`
  padding: 0.2em;
  padding-bottom: 2em;
  width: 100%;
  @media (max-width: 680px) {
    width: calc(10px + 20vw);
  }
`;

const Text = styled.p`
  ${fourthText};
`;

const PsNFTCategoryFilter = ({
  title,
  onClick,
  style,
  isActive,
}: PsNFTCategoryFilterProps) => {
  // refs
  const buttonRef = useRef(null);

  // animations
  gsap.defaults({ overwrite: 'auto' });
  const tl = gsap.timeline({ paused: true, reversed: true });

  useEffect(() => {
    tl.to(buttonRef?.current, {
      scaleX: 1.05,
      scaleY: 1.05,
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
    <ButtonContainer>
      <Button
        onClick={(e: React.MouseEvent<HTMLDivElement>) => handleOnClick(e)}
        ref={buttonRef}
        onMouseEnter={handleOnMouseEnter}
        onMouseLeave={handleOnMouseLeave}
        style={{
          ...style,
          backgroundColor: isActive
            ? thirdButton.backgroundColor
            : primaryBg.backgroundColor,
          borderStyle: isActive ? button.color : 'none',
        }}
      >
        <Text style={{ color: isActive ? fourthText.color : thirdText.color }}>
          {title}
        </Text>
      </Button>
    </ButtonContainer>
  );
};

export default PsNFTCategoryFilter;
