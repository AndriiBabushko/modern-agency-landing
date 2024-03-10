'use client';

import React, { FC } from 'react';
import Image from 'next/image';
import FacebookImage from '@assets/facebook.png';

export const Facebook: FC = () => {
  return <Image src={FacebookImage} height={18} alt={'Facebook'} />;
};
