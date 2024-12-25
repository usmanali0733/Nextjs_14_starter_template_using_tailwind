import { mergeClasses } from '@/utils/helpers';
import React from 'react';

export enum AvatarSize {
  sm = 'size-10',
  md = 'size-12',
  lg = 'size-16',
}

type AvatarGroupProps = {
  pUsersImage?: Array<string>;
  pIsShowRestUsers?: boolean;
  pRestUsersCount?: number;
  pSize?: AvatarSize;
};

const AvatarGroup: React.FC<AvatarGroupProps> = ({
  pUsersImage = [],
  pIsShowRestUsers = false,
  pRestUsersCount = 10,
  pSize = AvatarSize.sm,
}) => {
  return (
    <div className="flex -space-x-4 rtl:space-x-reverse">
      {pUsersImage.map((image: string, index: number) => (
        <img
          key={`user-image-${image}`}
          className={mergeClasses(
            'rounded-full border-2 border-white object-cover dark:border-gray-800',
            pSize
          )}
          src={image}
          alt={`user-avatar-${index + 1}`}
        />
      ))}

      {pIsShowRestUsers && (
        <div
          className={mergeClasses(
            'flex items-center justify-center rounded-full border-2 border-white bg-gray-300 text-xs font-medium text-black hover:bg-gray-400 dark:border-gray-800',
            pSize
          )}
        >
          +{pRestUsersCount}
        </div>
      )}
    </div>
  );
};

export default AvatarGroup;
