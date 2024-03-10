'use client';

import React, { FC, ReactNode } from 'react';
import { Flex as AboutContainer, Box as BorderLine } from '@chakra-ui/react';
import { LayoutProps } from '@chakra-ui/styled-system';
import { COLORS } from '@utils/constants';

interface AboutBoxProps {
  isCorners?: boolean;
  children: ReactNode;
  width: LayoutProps['width'];
}

export const AboutBox: FC<AboutBoxProps> = ({
  children,
  width,
  isCorners = true,
}) => {
  return (
    <AboutContainer
      width={width}
      flexDirection={'column'}
      position={'relative'}
      borderRightColor={COLORS.GRAY}
      borderRightWidth={isCorners ? 1 : 0}
      paddingTop={'24px'}
      paddingBottom={'32px'}
      paddingLeft={'32px'}
      paddingRight={'24px'}
      gap={'24px'}
    >
      {isCorners && (
        <>
          <BorderLine
            position={'absolute'}
            top={-0.5}
            right={-3}
            backgroundColor={COLORS.ACCENT}
            width={'32px'}
            height={'4px'}
          />
          <BorderLine
            position={'absolute'}
            top={-3}
            right={-0.5}
            backgroundColor={COLORS.ACCENT}
            width={'4px'}
            height={'32px'}
          />
          <BorderLine
            position={'absolute'}
            bottom={-0.5}
            right={-3}
            backgroundColor={COLORS.ACCENT}
            width={'32px'}
            height={'4px'}
          />
          <BorderLine
            position={'absolute'}
            bottom={-3}
            right={-0.5}
            backgroundColor={COLORS.ACCENT}
            width={'4px'}
            height={'32px'}
          />
        </>
      )}
      {children}
    </AboutContainer>
  );
};
