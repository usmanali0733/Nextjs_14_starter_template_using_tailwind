import { mergeClasses } from '@/utils/helpers';
import { Transition } from '@headlessui/react';
import React, { useState } from 'react';

type TooltipProps = {
  icon: React.ReactNode;
  children: React.ReactNode;
  tooltipText: string;
  position?: 'top' | 'right' | 'bottom' | 'left'; // Position of tooltip
  delay?: number; // Optional delay for showing the tooltip
};

const Tooltip: React.FC<TooltipProps> = ({
  icon,
  children,
  tooltipText,
  position = 'top',
  delay = 200,
}) => {
  const [showTooltip, setShowTooltip] = useState(false);
  // eslint-disable-next-line no-undef
  let timeout: NodeJS.Timeout;

  // Function to handle mouse over (with delay)
  const handleMouseOver = () => {
    timeout = setTimeout(() => setShowTooltip(true), delay);
  };

  // Function to hide tooltip when mouse leaves
  const handleMouseLeave = () => {
    clearTimeout(timeout);
    setShowTooltip(false);
  };

  const positionClasses = {
    top: 'bottom-full left-1/2 transform -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 transform -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 transform -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 transform -translate-y-1/2 ml-2',
  };

  return (
    <div className="relative flex items-center gap-2" onMouseLeave={handleMouseLeave}>
      {/* Children (rendered on the left) */}
      <div>{children}</div>

      {/* Icon (hoverable to show tooltip) */}
      <div
        className="relative inline-block"
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      >
        {icon}

        {/* Tooltip */}
        <Transition
          show={showTooltip}
          enter="transition-opacity duration-150"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            className={mergeClasses(
              'absolute z-10 whitespace-nowrap rounded bg-gray-900 p-2 text-sm text-white shadow-md',
              positionClasses[position]
            )}
          >
            {tooltipText}
          </div>
        </Transition>
      </div>
    </div>
  );
};

export default Tooltip;
