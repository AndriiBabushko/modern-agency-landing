'use client';

import React, { FC } from 'react';

interface PlayProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  strokeColor?: string;
}

export const Play: FC<PlayProps> = ({
  size = 50,
  color = 'white',
  strokeWidth = 1,
  strokeColor = '#000',
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      viewBox='0 0 24 24'
    >
      <circle cx='12' cy='12' r='10' fill={color} />
      <polygon
        points='10,8 18,12 10,16'
        fill='none'
        strokeWidth={strokeWidth}
        stroke={strokeColor}
      />
    </svg>
  );
};
