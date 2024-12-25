'use client';

import { Option, OptionWithIcon } from '@/types';
import { FC, ReactElement } from 'react';
import { mergeClasses } from '../utils/helpers';

type ToggleTabProps = {
  options: OptionWithIcon[];
  selectedValue: string;
  onClick: (data: Option) => void;
  children: ReactElement | null;
};

const ToggleTab: FC<ToggleTabProps> = ({ options, selectedValue, onClick, children }) => {
  return (
    <>
      <div className="flex w-full border-b-[1px]">
        {options.map((option) => (
          <button
            key={option.value}
            onClick={() => onClick({ name: option.name, value: option.value })}
            className={mergeClasses(
              'me-[2rem] flex items-center gap-1 border-b-4 border-transparent py-2 text-xl transition-colors duration-200',
              selectedValue === option.value ? 'border-selection font-bold text-black' : ''
            )}
          >
            {option?.icon && <span>{option.icon}</span>}
            <span className="font-medium">{option.name}</span>
          </button>
        ))}
      </div>
      {children}
    </>
  );
};

export default ToggleTab;
