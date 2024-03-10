'use client';

import React, { FC } from 'react';
import Image from 'next/image';
import PhoneImage from '@assets/phone.png';

export const Phone: FC = () => {
  return <Image src={PhoneImage} width={15} height={50} alt={'Phone'} />;
};
