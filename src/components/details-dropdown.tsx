import { mergeClasses } from '@/utils/helpers';
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  Transition,
} from '@headlessui/react';
import React, { Fragment } from 'react';
import { HiDotsHorizontal } from 'react-icons/hi';


type Option = {
  value: string;
  name: string;
};


type OptionWithIcon = Option & {
  icon?: React.ReactElement | null;
};

export type DetailsDropdownProps = {
  pOptions: OptionWithIcon[]; // Options for the dropdown
  pOnClick: (data: Option) => void; // Change handler
  pClassName?: string; // Additional custom class
  pSize?: number; // Control the three dots icon size
  pButtonContent?: React.ReactNode; // Custom content for the ListboxButton
  alignment?: 'left' | 'right';
};

const DetailsDropdown: React.FC<DetailsDropdownProps> = ({
  pOptions,
  pOnClick,
  pClassName = '',
  pSize = 20,
  pButtonContent,
  alignment = 'left',
}) => {
  return (
    <Listbox>
      <div className={mergeClasses('relative', pClassName)}>
        <ListboxButton>
          {pButtonContent ? (
            pButtonContent
          ) : (
            <span className="block truncate">
              <HiDotsHorizontal size={pSize} />
            </span>
          )}
        </ListboxButton>

        {/* Transition for the dropdown list */}
        <Transition
          as={Fragment}
          leave="transition ease-in duration-70"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <ListboxOptions
            className={mergeClasses(
              'absolute z-10 mt-2 max-h-60 overflow-auto rounded-md bg-white text-base shadow-lg sm:text-sm',
              alignment === 'right' ? 'right-0' : 'left-0'
            )}
          >
            {pOptions.map((option) => (
              <ListboxOption
                key={option.value}
                value={option.value}
                className={
                  'relative flex cursor-pointer select-none items-center gap-2 px-5 py-3 hover:bg-border'
                }
                onClick={() => pOnClick({ name: option.name, value: option.value })}
              >
                {option?.icon && <span> {option.icon} </span>}
                <span className="block truncate font-normal">{option.name}</span>
              </ListboxOption>
            ))}
          </ListboxOptions>
        </Transition>
      </div>
    </Listbox>
  );
};

export default DetailsDropdown;
