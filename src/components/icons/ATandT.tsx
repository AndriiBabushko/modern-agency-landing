'use client';

import React, { FC } from 'react';
import Image from 'next/image';
import ATandTImage from '@assets/at-and-t.png';

export const ATandT: FC = () => {
  return <Image src={ATandTImage} width={100} height={44} alt={'AT&T'} />;
};
