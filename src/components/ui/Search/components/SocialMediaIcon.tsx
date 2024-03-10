'use client';

import React, { FC, ReactNode } from 'react';
import {
  Flex as SocialMediaBlock,
  Box as SocialMediaIconBlock,
} from '@chakra-ui/react';
import { COLORS } from '@utils/constants';

interface SocialMediaIconProps {
  icon: ReactNode;
}

export const SocialMediaIcon: FC<SocialMediaIconProps> = ({ icon }) => {
  return (
    <SocialMediaBlock
      justifyContent={'center'}
      alignItems={'center'}
      width={'30px'}
      borderLeftColor={COLORS.WHITE}
      borderLeftWidth={1}
    >
      <SocialMediaIconBlock paddingBottom={'4px'}>{icon}</SocialMediaIconBlock>
    </SocialMediaBlock>
  );
};
