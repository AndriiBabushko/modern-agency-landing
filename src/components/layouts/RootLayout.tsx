'use client';

import React, { FC, ReactNode } from 'react';
import { ChakraProvider } from '@chakra-ui/react';

interface RootLayoutProps {
  children: ReactNode;
}

export const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return <ChakraProvider>{children}</ChakraProvider>;
};
