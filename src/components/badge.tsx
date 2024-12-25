'use client';
import { mergeClasses } from '@/utils/helpers';
import React from 'react';

type BadgeProps = {
  classes?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  children: React.ReactNode;
};

const Badge: React.FC<BadgeProps> = ({ classes, onClick, icon, children }) => {
  const isClickable = !!onClick;

  return (
    <div
      onClick={onClick}
      className={mergeClasses(
        'inline-flex items-center gap-1 rounded px-3 py-1',
        isClickable ? 'cursor-pointer' : 'pointer-events-none cursor-not-allowed',
        classes
      )}
    >
      {icon && <span>{icon}</span>}
      <span className="font-medium">{children}</span>
    </div>
  );
};

export default Badge;
