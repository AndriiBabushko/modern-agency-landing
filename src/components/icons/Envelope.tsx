'use client';

import React, { FC } from 'react';
import Image from 'next/image';
import EnvelopeImage from '@assets/envelope.png';

export const Envelope: FC = () => {
  return <Image src={EnvelopeImage} width={30} height={50} alt={'Envelope'} />;
};
