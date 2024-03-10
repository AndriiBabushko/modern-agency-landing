'use client';

import React, { FC } from 'react';
import Image from 'next/image';
import PolarBeveragesImage from '@assets/polar-beverages.png';

export const PolarBeverages: FC = () => {
  return (
    <Image
      src={PolarBeveragesImage}
      width={71}
      height={80}
      alt={'Polar Beverages'}
    />
  );
};
