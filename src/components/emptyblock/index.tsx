import React from 'react';

interface Props {}

const EmptyBlock: React.FC<Props> = ({ children }) => {
  return <div>{children}</div>;
};

export default EmptyBlock;
