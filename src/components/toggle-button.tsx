'use client';

import { Switch } from '@headlessui/react';
import { FC } from 'react';
import { mergeClasses } from '../utils/helpers';

type ToggleButtonProps = {
  label?: string;
  showLabel?: boolean;
  isActive: boolean;
  isDisabled?: boolean;
  onChange?: (active: boolean) => void;
};

const ToggleButton: FC<ToggleButtonProps> = ({
  label,
  showLabel = true,
  isActive,
  isDisabled = false,
  onChange,
}) => {
  return (
    <div className="flex items-center gap-3">
      <Switch
        checked={isActive}
        disabled={isDisabled}
        onChange={onChange}
        className={mergeClasses(
          'relative flex h-7 w-14 cursor-pointer rounded-full p-1 transition-colors duration-200',
          isActive ? 'bg-[#734ceb]' : 'bg-[#f1f0fd]',
          isDisabled && 'cursor-not-allowed opacity-50'
        )}
      >
        <span
          className={mergeClasses(
            'pointer-events-none inline-block size-5 rounded-full bg-white shadow-lg transition duration-200',
            isActive ? 'translate-x-7' : 'translate-x-0'
          )}
        />
      </Switch>
      {showLabel && label && <span className="text-gray-700">{label}</span>}
    </div>
  );
};

export default ToggleButton;
