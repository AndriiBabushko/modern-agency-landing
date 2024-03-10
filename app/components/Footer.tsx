'use client';

import { FC } from 'react';
import {
  Flex as FooterContainer,
  Flex as InfoBlock,
  Flex as NavBlock,
  Divider as NavDivider,
  Text as CopyrightText,
} from '@chakra-ui/react';
import { Logo } from '@components/ui';
import { COLORS } from '@utils/constants';
import { Navigation } from '@components/ui/Nav/components';

export const Footer: FC = () => {
  return (
    <FooterContainer flexDirection={'row'} gap={'20px'} paddingBottom={'36px'}>
      <Logo />
      <InfoBlock
        flex={1}
        flexDirection={'column'}
        justifyContent={'flex-end'}
        gap={'10px'}
      >
        <NavBlock flexDirection={'column'}>
          <Navigation isIcon={false} gap={'24px'} />
          <NavDivider backgroundColor={COLORS.GRAY} />
        </NavBlock>
        <CopyrightText textAlign={'end'}>
          @ 2009 LIPSUM MEDIA, LLC
        </CopyrightText>
      </InfoBlock>
    </FooterContainer>
  );
};
