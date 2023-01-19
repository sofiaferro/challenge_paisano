import React, { useEffect, useRef } from 'react';

import gsap from 'gsap';
import styled from 'styled-components';

import texts from '@/styles/texts';
import { theme } from '@/styles/theme';

interface PsButtonProps {
  title: string;
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
  containerStyle?: object;
  buttonStyle?: object;
}

// styles
const { button } = texts;
const { secondaryButton } = theme;

const Button = styled.div`
  ${button};
  ${secondaryButton};
  border-radius: 2em;
  border-style: solid;
  border-width: 2px;
  padding-top: 1em;
  padding-bottom: 1em;
  text-align: center;
`;

const ButtonContainer = styled.div`
  padding: 0.2em;
  width: calc(10px + 15vw);
  @media (max-width: 680px) {
    width: 100%;
  }
`;

const PsButton = ({
  title,
  onClick,
  containerStyle,
  buttonStyle,
}: PsButtonProps) => {
  // refs
  const buttonRef = useRef(null);

  // animations
  gsap.defaults({ overwrite: 'auto' });
  const tl = gsap.timeline({ paused: true, reversed: true });

  useEffect(() => {
    tl.to(buttonRef.current, {
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
    <ButtonContainer style={{ ...containerStyle }}>
      <Button
        style={{ ...buttonStyle }}
        onClick={(e: React.MouseEvent<HTMLDivElement>) => handleOnClick(e)}
        ref={buttonRef}
        onMouseEnter={handleOnMouseEnter}
        onMouseLeave={handleOnMouseLeave}
      >
        <p>{title}</p>
      </Button>
    </ButtonContainer>
  );
};

export default PsButton;
