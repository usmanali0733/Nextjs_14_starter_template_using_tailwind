import Button from '@/components/icon-button';
import { ChangeEvent, FC, KeyboardEvent, ReactNode, useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import CountBadge, { CountBadgeProps } from './count-badge';
import DetailsDropdown, { DetailsDropdownProps } from './details-dropdown';

type ColumnCardProps = {
  title: string;
  children: ReactNode;
  onTitleUpdate?: (newTitle: string) => void;
  onAddItem?: () => void;
  buttonText?: string;
  className?: string;
  detailDropdown?: DetailsDropdownProps;
  countBadge?: CountBadgeProps;
};
const ColumnCard: FC<ColumnCardProps> = ({
  title,
  children,
  onTitleUpdate,
  onAddItem,
  buttonText = 'Add Item',
  className = '',
  detailDropdown,
  countBadge,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [columnTitle, setColumnTitle] = useState(title);
  const handleTitleClick = () => {
    if (onTitleUpdate) {
      setIsEditing(true);
    }
  };
  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setColumnTitle(event.target.value);
  };

  const handleTitleBlur = () => {
    if (columnTitle.trim() !== title && onTitleUpdate) {
      onTitleUpdate(columnTitle);
    }
    setIsEditing(false);
  };
  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleTitleBlur();
    }
  };
  return (
    <div
      className={`flex h-fit max-h-[80vh] w-full min-w-80 flex-col rounded-lg bg-secondary-bg bg-opacity-75 p-4 shadow-md transition-all hover:bg-opacity-85 ${className}`}
    >
      <div className="mb-2 flex items-center">
        {isEditing ? (
          <input
            type="text"
            value={columnTitle}
            onChange={handleTitleChange}
            onKeyDown={handleKeyDown}
            onBlur={handleTitleBlur}
            autoFocus
            className="rounded-lg border-b border-gray-300 p-1 text-lg font-semibold outline-none"
          />
        ) : (
          <div className="flex flex-1 items-center justify-between">
            <h3
              className="flex cursor-pointer items-center gap-2 text-lg font-semibold"
              onClick={handleTitleClick}
            >
              {columnTitle}
              {countBadge ? <CountBadge {...countBadge} /> : null}
            </h3>

            {detailDropdown?.pOptions?.length ? <DetailsDropdown {...detailDropdown} /> : null}
          </div>
        )}
      </div>
      <ul className="flex-1 overflow-y-auto">{children}</ul>
      {/* Add Item Button */}
      {onAddItem && (
        <div className="mt-4">
          <Button
            text={buttonText}
            icon={<FaPlus className="size-5" />}
            onClick={onAddItem}
            className="bg-transparent text-sm shadow-none hover:text-selection"
          />
        </div>
      )}
    </div>
  );
};
export default ColumnCard;
