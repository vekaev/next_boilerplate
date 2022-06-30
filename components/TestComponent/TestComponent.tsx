import React from 'react';

type testComponentProps = {
  name: string;
};

const TestComponent: React.FC<testComponentProps> = ({ name }) => {
  return (
    <div>
      <p>Hello, {name}</p>
    </div>
  );
};

export default TestComponent;
