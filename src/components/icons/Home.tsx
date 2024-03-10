'use client';

import React, { FC } from 'react';
import Image from 'next/image';
import HomeImage from '@assets/home.png';

export const Home: FC = () => {
  return <Image src={HomeImage} width={30} height={50} alt={'Home'} />;
};
