import { mergeClasses } from '@/utils/helpers';
import React from 'react';

export enum InputVariants {
  THIN = 'h-9 border rounded-tl-lg',
  NORMAL = 'h-14 border rounded-tl-lg',
}

type InputProps = {
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  id: string;
  label?: string;
  className?: string;
  disabled?: boolean;
  startIcon?: React.ReactElement | null;
  endIcon?: React.ReactElement | null;
  variant?: InputVariants;
  onEndIconClick?: () => void;
};

const BaseInput: React.FC<InputProps> = ({
  type = 'text',
  value,
  onChange,
  placeholder,
  id,
  label,
  className = '',
  disabled = false,
  startIcon,
  endIcon,
  variant = InputVariants.THIN,
  onEndIconClick,
}) => {
  const setCustomClassStyling = `${disabled ? 'bg-gray-100 cursor-not-allowed' : ''} ${variant}`;

  return (
    <div className="flex flex-col space-y-2">
      {label && (
        <label htmlFor={id} className="text-sm font-medium">
          {label}
        </label>
      )}
      <div
        className={mergeClasses(
          'flex items-center gap-2 rounded-md border border-border p-[10px_14px_10px_14px] transition',
          setCustomClassStyling
        )}
      >
        {startIcon && <span className="inline-block">{startIcon}</span>}
        <input
          type={type}
          id={id}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          className={mergeClasses('flex-1 bg-transparent p-[0.4rem] focus:outline-none', className)}
        />
        {endIcon && (
          <span className="inline-block" onClick={onEndIconClick}>
            {endIcon}
          </span>
        )}
      </div>
    </div>
  );
};

export default BaseInput;
