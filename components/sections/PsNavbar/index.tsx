import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

import { Power2, gsap } from 'gsap';
import styled from 'styled-components';

import { theme } from '@/styles/theme';
import { useStyleState } from '@/styles/context';

import { LayoutProps } from '@/hooks/useDeviceSize';

import PsBurguerIcon from './dedicated/PsBurguerIcon';
import PsNavbarItem from './dedicated/PsNavbarItem';
import PsButton from '@/components/molecules/PsButton';

import logo from '@/images/logo.png';

// styles
const { firstBg } = theme;

const Navbar = styled.nav`
  ${firstBg};
  width: 100%;
  height: '81px';
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 2em;
  justify-content: space-between;
  @media (max-width: 680px) {
    height: 104px;
  }
`;

const MobileNavMenu = styled.ul`
  ${firstBg};
  padding: 2em;
  flex-direction: column;
  position: absolute;
  width: 100%;
  justify-content: center;
  z-index: 2;
  top: 80px;
`;

const ToggleContainer = styled.div`
  width: 2em;
  height: 2em;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DesktopNavMenu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
`;

const PsNavBar = () => {
  // layout
  const {
    device: { A, S },
  } = useStyleState() as LayoutProps;

  const isMobOrTab = A || S;

  // refs
  const topRef = useRef(null);
  const bottomRef = useRef(null);
  const menuRef = useRef(null);
  const menuChildren = (menuRef.current as unknown as HTMLUListElement)
    ?.children;

  // animations
  const tl = gsap.timeline({
    paused: true,
    reversed: true,
    defaults: { ease: Power2.easeInOut },
  });

  useEffect(() => {
    tl.to(topRef.current, {
      rotationZ: 45,
      transformOrigin: '25% 25%',
      duration: 0.1,
    }).to(bottomRef.current, {
      rotationZ: -45,
      transformOrigin: '25% 25%',
      duration: 0.1,
    });
    tl.fromTo(
      menuRef.current,
      {
        display: 'none',
        opacity: 0,
      },
      {
        opacity: 1,
        display: 'flex',
        height: '100vw',
      }
    );
    tl.fromTo(
      menuChildren,
      {
        x: -30,
        opacity: 0,
        display: 'none',
      },
      {
        opacity: 1,
        display: 'flex',
        x: 0,
      }
    );
    return () => {
      tl.kill();
    };
  }, [tl]);

  // data
  const mobileMenuItems = [
    {
      href: '/discover',
      text: 'Discover',
    },
    {
      href: '/about',
      text: 'What we do',
    },
    {
      href: '/wallet',
      text: 'Conect Wallet',
    },
  ];

  const desktopMenuItems = [mobileMenuItems[0], mobileMenuItems[1]];

  // handlers
  const handleToggle = () => {
    tl.reversed() ? tl.restart() : tl.reverse();
  };

  const handlePushPage = (
    e:
      | React.MouseEvent<HTMLAnchorElement, MouseEvent>
      | React.MouseEvent<HTMLDivElement>,
    href: string
  ) => {
    e.preventDefault();
    tl.reverse();
    return console.log(href);
  };

  return (
    <div>
      <Navbar>
        <LogoContainer>
          <Image src={logo} alt='NFTPaisanos logo' />
          {!isMobOrTab && (
            <DesktopNavMenu>
              {desktopMenuItems.map((item, i) => (
                <PsNavbarItem
                  item={item}
                  key={`key_menu_item_${i}_${item.href}`}
                  onClick={(
                    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
                  ) => handlePushPage(e, item.href)}
                />
              ))}
            </DesktopNavMenu>
          )}
        </LogoContainer>
        {isMobOrTab && (
          <ToggleContainer onClick={handleToggle}>
            <PsBurguerIcon topRef={topRef} bottomRef={bottomRef} />
          </ToggleContainer>
        )}
        {!isMobOrTab && (
          <PsButton
            title={'Conect Wallet'}
            onClick={(e: React.MouseEvent<HTMLDivElement>) =>
              handlePushPage(e, '/wallet')
            }
          />
        )}
      </Navbar>
      {isMobOrTab && (
        <MobileNavMenu ref={menuRef}>
          {mobileMenuItems.map((item, i) => (
            <PsNavbarItem
              item={item}
              key={`key_menu_item_${i}_${item.href}`}
              onClick={(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) =>
                handlePushPage(e, item.href)
              }
            />
          ))}
        </MobileNavMenu>
      )}
    </div>
  );
};

export default PsNavBar;
