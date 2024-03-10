'use client';

import React, { FC } from 'react';
import Image from 'next/image';
import LeafImage from '@assets/leaf-logo.png';

export const Leaf: FC = () => {
  return <Image src={LeafImage} width={50} height={50} alt={'Lipsum Media'} />;
};
