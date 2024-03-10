'use client';

import React, { FC } from 'react';
import Image from 'next/image';
import GapImage from '@assets/gap.png';

export const Gap: FC = () => {
  return <Image src={GapImage} width={65} height={65} alt={'GAP'} />;
};
