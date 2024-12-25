import { generateDarkColorHex, mergeClasses } from '@/utils/helpers';
import React from 'react';

export type CountBadgeProps = {
  pCount: number;
  pBgColor?: string;
  pClassName?: string;
};

const CountBadge: React.FC<CountBadgeProps> = ({
  pCount,
  pBgColor = generateDarkColorHex(),
  pClassName,
}) => {
  return (
    <div
      style={{ backgroundColor: pBgColor }}
      className={mergeClasses(
        'flex h-6 w-6 items-center justify-center rounded-full text-[0.8rem] text-white',
        pClassName
      )}
    >
      {pCount}
    </div>
  );
};

export default CountBadge;
