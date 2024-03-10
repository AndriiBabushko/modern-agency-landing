'use client';

import { FC } from 'react';
import {
  Flex as ContentBox,
  Box as TitleBox,
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
    <ContentBox flexDirection={'column'} gap={'8px'}>
      <TitleBox padding={'4px'} backgroundColor={COLORS.WHITE}>
        <TitleText as={'h3'}>{title}</TitleText>
      </TitleBox>
      <DescriptionText>{description}</DescriptionText>
    </ContentBox>
  );
};
