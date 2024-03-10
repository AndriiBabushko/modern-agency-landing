'use client';

import { FC } from 'react';
import {
  Flex as ContentBox,
  Heading as TitleText,
  Text as DescriptionText,
} from '@chakra-ui/react';
import { COLORS } from '@utils/constants/colors';

interface DescriptionBlockProps {
  title: string;
  description: string;
}

export const DescriptionBlock: FC<DescriptionBlockProps> = ({
  title,
  description,
}) => {
  return (
    <ContentBox flexDirection={'column'} alignItems={'flex-start'} gap={'8px'}>
      <TitleText
        as={'h3'}
        padding={'4px'}
        backgroundColor={COLORS.WHITE}
        color={COLORS.BLACK}
        fontWeight={600}
        fontSize={'18px'}
      >
        {title}
      </TitleText>
      <DescriptionText
        as={'p'}
        color={COLORS.WHITE}
        fontWeight={400}
        fontSize={'16px'}
      >
        {description}
      </DescriptionText>
    </ContentBox>
  );
};
