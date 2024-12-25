import React from 'react';

type DashboardLayoutProps = {
  children: React.ReactNode;
};

const DefaultDashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <main className="relative flex h-screen">
      {/* Sidebar */}

      {/* Main content area */}
      <div className="relative flex flex-1 flex-col overflow-x-hidden">
        {/* Header */}

        {/* Content below the header */}
        <div className="w-full flex-1 overflow-x-hidden pt-[72px]">{children}</div>
      </div>
    </main>
  );
};

export { DefaultDashboardLayout };
