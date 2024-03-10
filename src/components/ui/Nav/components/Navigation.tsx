'use client';

import React, { FC } from 'react';
import { Flex as NavContainer, List as NavList } from '@chakra-ui/react';
import { NavItem } from './NavItem';
interface NavigationProps {
  isIcon?: boolean;
}

export const Navigation: FC<NavigationProps> = ({ isIcon }) => {
  return (
    <NavContainer
      display={{ base: 'none', md: 'flex' }}
      flex={1}
      alignItems={'center'}
      justifyContent={'flex-end'}
    >
      <NavList
        display={'flex'}
        flexDirection={'row'}
        alignItems={'flex-end'}
        gap={'12px'}
      >
        <NavItem isIcon={isIcon} text={'Home'} href={'/'} />
        <NavItem isIcon={isIcon} text={'About'} href={'/about'} />
        <NavItem isIcon={isIcon} text={'Work'} href={'/work'} />
        <NavItem isIcon={isIcon} text={'Services'} href={'/services'} />
        <NavItem isIcon={isIcon} text={'Resources'} href={'/resources'} />
        <NavItem isIcon={isIcon} text={'Articles'} href={'/articles'} />
        <NavItem isIcon={isIcon} text={'Contact'} href={'/contact'} />
      </NavList>
    </NavContainer>
  );
};
