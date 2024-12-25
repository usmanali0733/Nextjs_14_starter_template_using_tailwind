import React from 'react';

type ViewRendererProps = {
  space?: number;
};

const Spacer: React.FC<ViewRendererProps> = ({ space = 20 }) => {
  return <div style={{ height: `${space}px` }} />;
};

export default Spacer;
