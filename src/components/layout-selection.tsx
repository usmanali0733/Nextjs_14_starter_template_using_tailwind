import { LayoutType } from '@/utils/constants';
import { mergeClasses } from '@/utils/helpers';
import React from 'react';
import { FaList, FaTh } from 'react-icons/fa';

type LayoutSelectionProps = {
  currentLayout: LayoutType;
  onLayoutChange: (layout: LayoutType) => void;
};

const LayoutSelection: React.FC<LayoutSelectionProps> = ({ currentLayout, onLayoutChange }) => {
  const isGridSelected = currentLayout === LayoutType.Grid;
  return (
    <div className="flex max-h-14 items-center justify-center gap-2 rounded-md border border-border px-4 py-2">
      {/* Grid Layout Button */}
      <button
        className={mergeClasses('rounded-md p-2', isGridSelected && 'bg-[#E5E4FC]/55')}
        onClick={() => onLayoutChange(LayoutType.Grid)}
        aria-label="Grid Layout"
      >
        <FaTh className={mergeClasses('size-5', isGridSelected && 'text-selection')} />
      </button>

      {/* List Layout Button */}
      <button
        className={mergeClasses('rounded-md p-2', !isGridSelected && 'bg-[#E5E4FC]/55')}
        onClick={() => onLayoutChange(LayoutType.List)}
        aria-label="List Layout"
      >
        <FaList className={mergeClasses('size-5', !isGridSelected && 'text-selection')} />
      </button>
    </div>
  );
};

export default LayoutSelection;
