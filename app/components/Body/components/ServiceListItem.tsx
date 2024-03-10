'use client';

import React, { FC } from 'react';
import {
  Flex as ServiceItemBox,
  Box as ArrowBox,
  ListItem,
  Text as ServiceText,
} from '@chakra-ui/react';
import { COLORS } from '@utils/constants';
import { MdArrowForward } from 'react-icons/md';

interface AboutListItemProps {
  text: string;
}

export const ServiceListItem: FC<AboutListItemProps> = ({ text }) => {
  return (
    <ListItem>
      <ServiceItemBox flexDirection={'row'} gap={'8px'}>
        <ArrowBox padding={'4px'} backgroundColor={COLORS.ACCENT}>
          <MdArrowForward fontWeight={700} />
        </ArrowBox>
        <ServiceText color={COLORS.BLACK} fontWeight={400} fontSize={'16px'}>
          {text}
        </ServiceText>
      </ServiceItemBox>
    </ListItem>
  );
};
