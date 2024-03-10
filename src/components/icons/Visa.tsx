'use client';

import React, { FC } from 'react';
import Image from 'next/image';
import VisaImage from '@assets/visa.png';

export const Visa: FC = () => {
  return <Image src={VisaImage} width={83} height={32} alt={'Visa'} />;
};
