import { LayoutType } from '@/utils/constants';
import React, { ReactNode } from 'react';

// Props for ViewRenderer component
type ViewRendererProps = {
  children: ReactNode;
  layout: LayoutType;
};

// Component that renders children based on layout type
const ViewRenderer: React.FC<ViewRendererProps> = ({ children, layout }) => {
  return (
    <div
      className={
        layout === LayoutType.Grid ? 'grid grid-cols-1 gap-4 md:grid-cols-3' : 'flex flex-col gap-4'
      }
    >
      {children}
    </div>
  );
};

export default ViewRenderer;
