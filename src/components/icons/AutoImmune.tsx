'use client';

import React, { FC } from 'react';
import Image from 'next/image';
import AutoImmuneImage from '@assets/autoimmune.png';

export const AutoImmune: FC = () => {
  return (
    <Image src={AutoImmuneImage} width={77} height={65} alt={'AutoImmune'} />
  );
};
