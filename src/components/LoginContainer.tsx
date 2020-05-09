import React from 'react';
import './ExploreContainer.css';

interface ContainerProps {
  name: string;
}

const LoginContainer: React.FC<ContainerProps> = () => {

	
  return (
    <div className="container">
    	<form>
    		<fieldset>
	    		<label>username</label>
	    		<input
	    			type='text'
	    			placeholder='username'
	    			name='username'
	    			required
	    		/>
	    	</fieldset>
	    	<fieldset>
	    		<label>password</label>
	    		<input
	    			type='password'
	    			placeholder='password'
	    			name='password'
	    			required
	    		/>
	    	</fieldset>
	    	<button type='submit'>Login</button>
    	</form>
    </div>
  );
};

export default LoginContainer;
