import React from 'react';
import { mergeClasses } from '@/utils/helpers';

type Step = {
  text: string;
  status: boolean;
};

type StepListProps = {
  steps: Step[];
};

const StepList: React.FC<StepListProps> = ({ steps }) => {
  return (
    <ol className="space-y-8 overflow-hidden">
      {steps.map((step, index) => (
        <li
          key={index}
          className={mergeClasses(
            'relative flex-1 after:absolute after:left-4 after:inline-block after:h-full after:w-[2px] after:content-[""] lg:after:left-[17px]',
            step.status ? 'after:bg-indigo-600' : 'after:bg-gray-300'
          )}
        >
          <div className="flex w-full items-center">
            <span
              className={mergeClasses(
                'mr-3 flex h-8 w-8 items-center justify-center rounded-full text-sm lg:h-10 lg:w-10',
                step.status ? 'bg-selection text-white' : 'border-2 border-selection-light bg-white'
              )}
            >
              <svg
                className={mergeClasses(
                  'h-5 w-5',
                  step.status ? 'stroke-white' : 'stroke-selection-light'
                )}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 12L9.28722 16.2923C9.62045 16.6259 9.78706 16.7927 9.99421 16.7928C10.2014 16.7929 10.3681 16.6262 10.7016 16.2929L20 7"
                  stroke="stroke-current"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </span>
            <div className="block">
              <span className="text-lg font-medium text-foreground">{step.text}</span>
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
};

export default StepList;
