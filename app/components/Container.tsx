import React, { FC, ReactNode } from 'react';
import { Box } from '@chakra-ui/react';

interface ContainerProps {
  children: ReactNode;
}

export const Container: FC<ContainerProps> = ({ children }) => {
  return <Box paddingX={{ base: '100px' }}>{children}</Box>;
};
