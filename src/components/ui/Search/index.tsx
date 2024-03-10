'use client';

import React, { FC } from 'react';
import { Flex as SearchBarContainer } from '@chakra-ui/react';
import { COLORS } from '@utils/constants';
import { SocialMedia, SearchInput } from './components';

export const SearchBar: FC = () => {
  return (
    <SearchBarContainer
      flexDirection={'row'}
      gap={'20px'}
      paddingLeft={'20px'}
      paddingTop={'4px'}
      backgroundColor={COLORS.ACCENT}
    >
      <SearchInput />
      <SocialMedia />
    </SearchBarContainer>
  );
};
