import React from 'react';
import './ExploreContainer.css';

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <div className="container">
      <strong>USER</strong>
      <p>EDIT PAGE STUFF HERE</p>
    </div>
  );
};

export default ExploreContainer;
