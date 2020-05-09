import React from 'react';
import './ExploreContainer.css';

interface ContainerProps {
  name: string;
}

const RegisterContainer: React.FC<ContainerProps> = () => {
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
	    		<label>email</label>
	    		<input
	    			type='text'
	    			placeholder='email'
	    			name='email'
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
	    	<fieldset>
	    		<label>zipcode</label>
	    		<input
	    			type='text'
	    			placeholder='zipcode'
	    			name='zip_code'
	    			required
	    		/>
	    	</fieldset>
	    	<button type='submit'>Create Account</button>
    	</form>

    </div>
  );
};

export default RegisterContainer;
