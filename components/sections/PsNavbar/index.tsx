import React, { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';

import { Power2, gsap } from 'gsap';
import styled from 'styled-components';

import { theme } from '@/styles/theme';
import { useStyleState } from '@/contexts/styles';

import { LayoutProps } from '@/hooks/useDeviceSize';

import Image from 'next/image';

import PsButton from '@/components/molecules/PsButton';
import PsVerticalDivider from '@/components/molecules/PsVerticalDivider';
import PsBurguerIcon from './dedicated/molecules/PsBurguerIcon';
import PsNavbarItem from './dedicated/molecules/PsNavbarItem';

import logo from '@/images/logo.png';

// styles
const { primaryBg } = theme;

const Content = styled.div`
  padding: 2em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100vw;
`;

const Navbar = styled.nav`
  ${primaryBg};
  width: 100%;
  height: 81px;
  display: flex;
  flex-direction: row;
  align-items: center;
  z-index: 3;
  position: fixed;
  padding-bottom: 2em;
  justify-content: space-between;
  @media (max-width: 680px) {
    height: 104px;
  }
`;

const MobileNavMenu = styled.ul`
  ${primaryBg};
  padding: 2em;
  flex-direction: column;
  position: absolute;
  width: 100vw;
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
  flex-direction: row;
  align-items: center;
  display: flex;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
`;

const PsNavBar = () => {
  // router
  const router = useRouter();

  // layout
  const {
    device: { A, S },
  } = useStyleState() as unknown as LayoutProps;

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
        height: '100vh',
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
  }, [tl, menuChildren]);

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
    <Navbar>
      <Content>
        <LogoContainer>
          <div onClick={() => router.push('/')}>
            <Image src={logo} alt='NFTPaisanos logo' />
          </div>
          {!A && !S && (
            <DesktopNavMenu>
              <PsVerticalDivider />
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
        {(A || S) && (
          <ToggleContainer onClick={handleToggle}>
            <PsBurguerIcon topRef={topRef} bottomRef={bottomRef} />
          </ToggleContainer>
        )}
        {!A && !S && (
          <PsButton
            title={'Conect Wallet'}
            onClick={(e: React.MouseEvent<HTMLDivElement>) =>
              handlePushPage(e, '/wallet')
            }
          />
        )}
      </Content>
      {(A || S) && (
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
    </Navbar>
  );
};

export default PsNavBar;
