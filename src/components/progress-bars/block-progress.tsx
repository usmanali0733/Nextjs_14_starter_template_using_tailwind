import { generateUniqueId, mergeClasses } from '@/utils/helpers'; // Make sure to use the correct path
import React from 'react';

type BlockProgressProps = {
  totalSteps: number;
  stepsCompleted: number;
  activeColor?: string;
  showPercentage?: boolean;
};

const BlockProgress: React.FC<BlockProgressProps> = ({
  totalSteps,
  stepsCompleted,
  activeColor = '#5FC454',
  showPercentage = true,
}) => {
  const percentage = (stepsCompleted / totalSteps) * 100;

  return (
    <div className="flex w-full items-center">
      {showPercentage && (
        <div className="mb-2 font-medium text-foreground">{Math.round(percentage)}%</div>
      )}
      <div className="flex w-full space-x-2">
        {Array.from({ length: totalSteps }, (_, index) => (
          <div
            key={generateUniqueId()}
            className={mergeClasses(
              'h-[5px] flex-1 rounded-full',
              index < stepsCompleted ? '' : 'bg-secondary-bg'
            )}
            style={{
              backgroundColor: index < stepsCompleted ? activeColor : 'bg-secondary-bg',
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default BlockProgress;
