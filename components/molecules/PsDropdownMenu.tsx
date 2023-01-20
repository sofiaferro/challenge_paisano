import React, { createRef, useEffect, useRef, useState } from 'react';

import gsap, { Power2 } from 'gsap';
import styled from 'styled-components';

import texts from '@/styles/texts';
import { theme } from '@/styles/theme';

import Image from 'next/image';

import iconChevron from '@/images/icon-chevron.svg';

interface PsDropdownMenuProps {
  options: object[];
  onChange: (val: number | string) => void;
  style?: object;
  defaultPlaceholder: string;
}

// styles
const { button } = texts;
const { secondaryButton, thirdText, primaryBg } = theme;

const DropdownMenu = styled.div`
  ${button};
  ${secondaryButton};
  ${primaryBg};
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
  padding-top: 1em;
  padding-bottom: 1em;
  display: flex;
  flex-direction: column;
  position: relative;
  width: 311px;
`;
const ImageWrapper = styled.div`
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

const MobileNavMenu = styled.ul`
  ${primaryBg};
  ${secondaryButton};
  padding: 1em;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  border-bottom-left-radius: 1em;
  border-bottom-right-radius: 1em;
  border-style: solid;
  border-width: 2px;
  top: 60px;
  z-index: 1;
  position: absolute;
`;

const Item = styled.li`
  ${button};
  ${secondaryButton};
  list-style: none;
  padding: 1em;
`;

const PsDropdownMenu = ({
  style,
  onChange,
  options,
  defaultPlaceholder,
}: PsDropdownMenuProps) => {
  // animations
  gsap.defaults({ overwrite: 'auto' });

  // animations
  const tl = gsap.timeline({
    paused: true,
    reversed: true,
    defaults: { ease: Power2.easeInOut },
  });

  // handlers
  const handleOnClick = () => {
    return tl.reversed() ? tl.play() : tl.reverse();
  };

  // refs
  const listRef = useRef(null);
  const chevronRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    tl.to(chevronRef.current, {
      transform: 'rotate(180deg)',
      duration: 0.2,
    });
    tl.fromTo(
      menuRef.current,
      {
        borderBottomLeftRadius: '1em',
        borderBottomRightRadius: '1em',
      },
      {
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        duration: 0.01,
      }
    );
    tl.fromTo(
      listRef.current,
      {
        display: 'none',
        opacity: 0,
      },
      {
        opacity: 1,
        display: 'flex',
      }
    );

    return () => {
      tl.kill();
    };
  }, [tl]);

  const [placeholder, setPlaceholder] = useState(defaultPlaceholder);

  const handleOnChange = (item: { text: string; value: number }) => {
    setPlaceholder(item.text);
    tl.reverse();
    return onChange(item.value);
  };

  return (
    <DropdownMenuContainer>
      <DropdownMenu
        ref={menuRef}
        onClick={() => handleOnClick()}
        style={{ ...style }}
      >
        <p>{placeholder}</p>
        <ImageWrapper>
          <Image src={iconChevron} alt={'Icon chevron bar'} ref={chevronRef} />
        </ImageWrapper>
      </DropdownMenu>
      <MobileNavMenu ref={listRef}>
        {options.map((item, i) => (
          <Item
            value={item.value}
            key={`key_menu_item_${i}_${item.text}`}
            onClick={() => handleOnChange(item)}
          >
            {item.text}
          </Item>
        ))}
      </MobileNavMenu>
    </DropdownMenuContainer>
  );
};

export default PsDropdownMenu;
