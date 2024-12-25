import { OptionWithIcon } from '@/types';
import { mergeClasses } from '@/utils/helpers';
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  Transition,
} from '@headlessui/react';
import React, { Fragment } from 'react';

type SingleSelectDropdownProps = {
  options: OptionWithIcon[]; // Options for the dropdown
  value: string | null; // Current selected value
  onChange: (value: string) => void; // Change handler
  placeholder?: string; // Placeholder text when no option is selected
  disabled?: boolean; // Disable the dropdown
  className?: string; // Additional custom class
  endIcon?: React.ReactElement | null; // Render end icon
};

const SingleSelectDropdown: React.FC<SingleSelectDropdownProps> = ({
  options,
  value,
  onChange,
  placeholder = 'Select an option',
  disabled = false,
  className = '',
  endIcon,
}) => {
  const selectedOption = options.find((option) => option.value === value);

  return (
    <Listbox value={value} onChange={onChange} disabled={disabled}>
      <div className={mergeClasses('relative', className)}>
        <ListboxButton
          className={mergeClasses(
            'relative w-full cursor-default rounded-lg border border-border bg-white p-5 text-left',
            disabled ? 'cursor-not-allowed opacity-60' : ''
          )}
        >
          <span className="block truncate">
            {selectedOption ? selectedOption.name : placeholder}
          </span>
          {endIcon && (
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              {endIcon}
            </span>
          )}
        </ListboxButton>

        {/* Transition for the dropdown list */}
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <ListboxOptions className="absolute max-h-60 w-full overflow-auto rounded-md bg-white text-base shadow-lg sm:text-sm">
            {options.map((option) => (
              <ListboxOption
                key={option.value}
                value={option.value}
                className={mergeClasses(
                  'relative flex cursor-default select-none items-center gap-2 px-5 py-3 hover:bg-border',
                  selectedOption?.value === option.value
                    ? 'font-bold text-selection'
                    : 'font-normal'
                )}
              >
                {({  }) => (
                  <>
                    {option.icon && <span>{option?.icon}</span>}
                    <span className="block truncate">{option.name}</span>
                  </>
                )}
              </ListboxOption>
            ))}
          </ListboxOptions>
        </Transition>
      </div>
    </Listbox>
  );
};

export default SingleSelectDropdown;
