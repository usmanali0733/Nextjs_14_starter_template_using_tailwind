import React, { ReactNode } from 'react';
import AvatarGroup, { AvatarSize } from './avatar-group';

type activitiesprops = {
  imgUrl: string;
  activityHtml: ReactNode;
  timeStamp: string;
};

type ActivityLogProps = {
  activities: activitiesprops[];
};

const ActivityLog: React.FC<ActivityLogProps> = ({ activities }) => {
  return (
    <div className="flex flex-col gap-6">
      {activities.map(({ activityHtml, imgUrl, timeStamp }, index) => (
        <div className="flex items-center gap-6" key={index}>
          <div className="h-3 w-3 rounded-full bg-selection-light"></div>

          <AvatarGroup pUsersImage={[imgUrl]} pIsShowRestUsers={false} pSize={AvatarSize.md} />

          <div className="flex flex-col gap-2">
            <div className="text-sm">{activityHtml}</div>
            <div className="text-xs text-heading">{timeStamp}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ActivityLog;
