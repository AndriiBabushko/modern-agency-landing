'use client';

import { FC } from 'react';
import { Flex as BodyContainer } from '@chakra-ui/react';
import { OurClientsBlock, YellowBlock, AboutBlock } from './components';

export const Body: FC = () => {
  return (
    <BodyContainer flexDirection={'column'} gap={'36px'} paddingBottom={'92px'}>
      <YellowBlock />
      <AboutBlock />
      <OurClientsBlock />
    </BodyContainer>
  );
};
