'use client';

import { FC } from 'react';
import { Flex } from '@chakra-ui/react';
import { NavBar, SearchBar } from '@components//ui';

export const Header: FC = () => {
  return (
    <Flex flexDirection={'column'} gap={'11px'} paddingBottom={'42px'}>
      <Flex flexDirection={'row'} justifyContent={'flex-end'}>
        <SearchBar />
      </Flex>
      <NavBar />
    </Flex>
  );
};
