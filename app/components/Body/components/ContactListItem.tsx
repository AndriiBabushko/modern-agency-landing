import React, { FC, ReactNode } from 'react';
import {
  ListItem,
  Flex as ContactItemBox,
  Flex as TextBox,
  Flex as IconBox,
} from '@chakra-ui/react';

interface ContactItemProps {
  text: ReactNode;
  icon: ReactNode;
}

export const ContactListItem: FC<ContactItemProps> = ({ text, icon }) => {
  return (
    <ListItem>
      <ContactItemBox
        flexDirection={'row'}
        alignItems={'flex-start'}
        gap={'8px'}
      >
        <IconBox justifyContent={'center'} width={'50px'}>
          {icon}
        </IconBox>
        <TextBox flexDirection={'column'} gap={'4px'} alignSelf={'center'}>
          {text}
        </TextBox>
      </ContactItemBox>
    </ListItem>
  );
};
