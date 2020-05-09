import React from 'react';
import './ExploreContainer.css';

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <div className="container">
	    <strong>Map :)</strong>
	    <p>map  </p>

		<script async defer
			src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB7G8yZAkGYtf2QQzkS1n0E1gZtpPF_h8w=initMap">
		</script>
    </div>
  );
};

export default ExploreContainer;
