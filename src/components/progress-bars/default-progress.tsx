import React from 'react';

interface ProgressProps {
  totalSteps: number;
  stepsCompleted: number;
  showPercentage?: boolean;
  activeColor?: string;
}

const DefaultProgress: React.FC<ProgressProps> = ({
  totalSteps,
  stepsCompleted,
  showPercentage = true,
  activeColor = 'bg-selection',
}) => {
  const percentage = (stepsCompleted / totalSteps) * 100;

  return (
    <div className="flex w-full items-center justify-center">
      {showPercentage && (
        <div className="font-medium text-foreground">{Math.round(percentage)}%</div>
      )}
      <div className="h-3 w-full rounded-full bg-secondary-bg">
        <div
          className={`h-3 rounded-full transition-all ease-in-out w-[${percentage}%] ${activeColor}`}
        />
      </div>
    </div>
  );
};

export default DefaultProgress;
