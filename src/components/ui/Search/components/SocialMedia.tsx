'use client';

import React, { FC } from 'react';
import { Flex as SocialMediaContainer } from '@chakra-ui/react';
import { Facebook, Twitter } from '@components/icons';
import { SocialMediaIcon } from '@components/ui/Search/components/SocialMediaIcon';

export const SocialMedia: FC = () => {
  return (
    <SocialMediaContainer>
      <SocialMediaIcon icon={<Facebook />} />
      <SocialMediaIcon icon={<Twitter />} />
    </SocialMediaContainer>
  );
};
