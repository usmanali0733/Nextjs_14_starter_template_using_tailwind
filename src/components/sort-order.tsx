import { mergeClasses } from '@/utils/helpers';
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';
import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { TbArrowsSort } from 'react-icons/tb';

type SortOrderProps = {
  options: Array<{ value: string; name: string }>;
  onChange: (value: string) => void;
  defaultValue?: string;
};

const SortOrder: React.FC<SortOrderProps> = ({ options, onChange, defaultValue }) => {
  const [selectedValue, setSelectedValue] = useState(defaultValue || options[0].value);

  const handleChange = (value: string) => {
    setSelectedValue(value);
    onChange(value);
  };

  const selectedOption = options.find((option) => option.value === selectedValue);

  return (
    <div className="flex max-h-14 items-center justify-center gap-2 rounded-md border border-border px-4 py-2">
      {/* Icon */}
      <span className="flex items-center justify-center text-lg">
        <TbArrowsSort />
      </span>

      {/* Label */}
      <span className="text-nowrap text-center text-heading">Sort by:</span>

      {/* Dropdown */}
      <Listbox value={selectedValue} onChange={handleChange}>
        <div className="relative">
          <ListboxButton className="relative w-full cursor-pointer rounded-lg bg-white py-2 pl-3 pr-10 text-center focus:outline-none">
            <span className="block truncate text-center">{selectedOption?.name}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center">
              <FaChevronDown className="h-5 w-5" aria-hidden="true" />
            </span>
          </ListboxButton>
          <ListboxOptions className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg focus:outline-none sm:text-sm">
            {options.map((option) => (
              <ListboxOption
                key={option.value}
                className={({ selected }) =>
                  mergeClasses(
                    'relative cursor-pointer select-none border-t px-2 py-2',
                    selected ? 'text-selection' : 'text-gray-900'
                  )
                }
                value={option.value}
              >
                {({ selected }) => (
                  <>
                    <span
                      className={mergeClasses(
                        'block truncate',
                        selected ? 'font-medium' : 'font-normal'
                      )}
                    >
                      {option.name}
                    </span>
                  </>
                )}
              </ListboxOption>
            ))}
          </ListboxOptions>
        </div>
      </Listbox>
    </div>
  );
};

export default SortOrder;
