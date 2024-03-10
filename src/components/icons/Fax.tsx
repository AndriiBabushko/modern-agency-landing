'use client';

import React, { FC } from 'react';
import Image from 'next/image';
import FaxImage from '@assets/fax.png';

export const Fax: FC = () => {
  return <Image src={FaxImage} width={30} height={50} alt={'Fax'} />;
};
