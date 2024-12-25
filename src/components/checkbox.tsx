import { mergeClasses } from '@/utils/helpers';
import React from 'react';
import { FaCheck } from 'react-icons/fa6';

type CheckboxProps = {
  isChecked: boolean;
  onClick: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  id: string;
};

const Checkbox: React.FC<CheckboxProps> = ({ isChecked, onClick, label, id }) => {
  return (
    <div className="flex items-center">
      {/* Hidden native checkbox */}
      <input type="checkbox" id={id} checked={isChecked} onChange={onClick} className="hidden" />
      {/* Custom label */}
      <label htmlFor={id} className="flex cursor-pointer items-center">
        {/* Custom checkbox styling */}
        <span
          className={mergeClasses(
            'inline-block h-[20px] w-[20px] rounded border border-border transition-colors',
            isChecked
              ? 'flex items-center justify-center border-selection bg-selection text-white'
              : ''
          )}
        >
          {isChecked && <FaCheck />}
        </span>
        {label && <span className="ml-2 text-[14px]">{label}</span>}
      </label>
    </div>
  );
};

export default Checkbox;
