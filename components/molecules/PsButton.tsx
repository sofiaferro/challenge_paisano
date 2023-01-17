import React, { useEffect, useRef } from 'react';

import gsap from 'gsap';
import styled from 'styled-components';

import texts from '@/styles/texts';
import { theme } from '@/styles/theme';

interface PsButtonProps {
  title: string;
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}

// styles
const { button } = texts;
const { secondaryButton } = theme;

const Button = styled.div`
  ${button};
  ${secondaryButton};
  border-radius: 15px;
  border-style: solid;
  border-width: 2px;
  padding: 0.5em;
`;

const PsButton = ({ title, onClick }: PsButtonProps) => {
  // refs
  const buttonRef = useRef(null);

  // animations
  gsap.defaults({ overwrite: 'auto' });
  const tl = gsap.timeline({ paused: true, reversed: true });

  useEffect(() => {
    tl.to(buttonRef?.current, {
      scaleX: 1.1,
      scaleY: 1.1,
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
    <Button
      onClick={(e: React.MouseEvent<HTMLDivElement>) => handleOnClick(e)}
      ref={buttonRef}
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
    >
      {title}
    </Button>
  );
};

export default PsButton;
