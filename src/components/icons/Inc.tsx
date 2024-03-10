'use client';

import React, { FC } from 'react';
import Image from 'next/image';
import IncImage from '@assets/inc.png';

export const Inc: FC = () => {
  return <Image src={IncImage} width={82} height={30} alt={'Inc'} />;
};
