'use client';

import React, { FC } from 'react';
import Image from 'next/image';
import TwitterImage from '@assets/twitter.png';

export const Twitter: FC = () => {
  return <Image src={TwitterImage} width={20} height={16} alt={'Twitter'} />;
};
