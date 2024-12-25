import { mergeClasses } from '@/utils/helpers';
import { FC } from 'react';

export type ToggleGroupOption = {
  name: string;
  value: string;
};

type ToggleGroupProps = {
  options: ToggleGroupOption[];
  selectedValues: string[];
  onClick: (value: string) => void;
};

const ToggleGroup: FC<ToggleGroupProps> = ({ options, selectedValues, onClick }) => {
  return (
    <div className="text-foreground-light flex w-full space-x-1 rounded-xl bg-secondary-bg p-1 font-normal">
      {options.map((option) => (
        <button
          key={option.value}
          onClick={() => onClick(option.value)}
          className={mergeClasses(
            'rounded-lg px-4 py-2 transition-colors duration-200 hover:drop-shadow-button-hover',
            selectedValues.includes(option.value) && 'bg-white font-medium text-heading drop-shadow'
          )}
        >
          <span className="inline-flex items-center text-nowrap">
            {selectedValues.includes(option.value) && (
              <span className="mr-2 size-2 rounded-full bg-selection"></span>
            )}
            {option.name}
          </span>
        </button>
      ))}
    </div>
  );
};

export default ToggleGroup;
