'use client';

import React, { FC } from 'react';
import {
  Flex as NavBarContainer,
  Flex as IconContainer,
  IconButton,
} from '@chakra-ui/react';
import { Logo } from '@components/ui';
import { MdMenu } from 'react-icons/md';
import { Navigation } from './components';

export const NavBar: FC = () => {
  return (
    <NavBarContainer>
      <Logo />
      <Navigation />
      <IconContainer display={{ base: 'flex', md: 'none' }}>
        <IconButton
          aria-label='Open menu'
          icon={<MdMenu />}
          variant='outline'
        />
      </IconContainer>
    </NavBarContainer>
  );
};
