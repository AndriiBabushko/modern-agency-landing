'use client';

import React, { FC } from 'react';
import { Text } from '@chakra-ui/react';
import { COLORS } from '@utils/constants';

interface ContactListTextProps {
  text: string;
  isBold?: boolean;
}

export const ContactListText: FC<ContactListTextProps> = ({
  text,
  isBold = false,
}) => {
  return (
    <Text
      as={'p'}
      backgroundColor={COLORS.BLACK}
      color={COLORS.WHITE}
      fontWeight={isBold ? 600 : 400}
      fontSize={'18px'}
      paddingX={'2px'}
    >
      {text}
    </Text>
  );
};
