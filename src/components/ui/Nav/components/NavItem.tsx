'use client';

import React, { FC } from 'react';
import {
  ListItem as NavListItem,
  Flex as NavItemBox,
  Text as NavLink,
} from '@chakra-ui/react';
import { MdArrowForward } from 'react-icons/md';
import { COLORS } from '@utils/constants';
import Link from 'next/link';

interface NavItemProps {
  text: string;
  href: string;
  isIcon?: boolean;
}

export const NavItem: FC<NavItemProps> = ({ text, href, isIcon = true }) => {
  const iconStyle = { color: COLORS.ACCENT };

  return (
    <NavListItem>
      <NavItemBox flexDirection={'row'} gap={'8px'} alignItems={'center'}>
        {isIcon && <MdArrowForward style={iconStyle} />}
        <Link href={href}>
          <NavLink>{text}</NavLink>
        </Link>
      </NavItemBox>
    </NavListItem>
  );
};
