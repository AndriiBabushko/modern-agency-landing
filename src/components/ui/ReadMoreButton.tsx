import React, { FC } from 'react';
import Link from 'next/link';
import {
  Flex as ReadMoreBox,
  Flex as ArrowBox,
  Text as ReadMoreText,
} from '@chakra-ui/react';
import { COLORS } from '@utils/constants';
import { MdArrowForward } from 'react-icons/md';

export const ReadMoreButton: FC = () => {
  return (
    <ReadMoreBox flexDirection={'row'} alignSelf={'flex-end'}>
      <Link href={'/readmore'}>
        <ReadMoreText
          as={'p'}
          color={COLORS.WHITE}
          backgroundColor={COLORS.BLACK}
          paddingX={'4px'}
        >
          Read more
        </ReadMoreText>
      </Link>
      <ArrowBox
        justifyContent={'center'}
        alignItems={'center'}
        width={'25px'}
        backgroundColor={COLORS.ACCENT}
      >
        <MdArrowForward width={100} />
      </ArrowBox>
    </ReadMoreBox>
  );
};
