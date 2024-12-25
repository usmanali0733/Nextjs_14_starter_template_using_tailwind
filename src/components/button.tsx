import { mergeClasses } from '@/utils/helpers';
import React from 'react';

type ButtonProps = {
  onClick: () => void;
  onMouseDown?: (e: React.SyntheticEvent) => void;
  onTouchStart?: (e: React.SyntheticEvent) => void;
  text: string;
  icon?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
};

const Button: React.FC<ButtonProps> = ({
  onClick,
  text,
  icon,
  className = '',
  type = 'button',
  disabled = false,
  onMouseDown,
  onTouchStart,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      type={type}
      className={mergeClasses(
        'flex h-fit w-full max-w-xs items-center justify-start gap-2 rounded-lg bg-white bg-opacity-100 px-2 py-4 text-lg font-semibold shadow-md transition-all duration-300 hover:bg-opacity-80',
        className // Merge with any additional classes passed through props
      )}
      onMouseDown={onMouseDown}
      onTouchStart={onTouchStart}
    >
      {icon && !text && <span className="mx-auto text-xl">{icon}</span>}
      {icon && text && <span className="text-xl">{icon}</span>}
      {text && <span>{text}</span>}
    </button>
  );
};

export default Button;
