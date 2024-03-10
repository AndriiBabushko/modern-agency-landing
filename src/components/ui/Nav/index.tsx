'use client';

import React, { FC } from 'react';
import { Flex as NavBarContainer } from '@chakra-ui/react';
import { Logo } from '@components/ui';

export const NavBar: FC = () => {
  return (
    <NavBarContainer>
      <Logo />
    </NavBarContainer>
  );
};
