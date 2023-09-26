import { useState } from 'react';
import { auth } from './Config/Configs';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';

function Logins() {

  let navigate=useNavigate();

  let [error,seterror]=useState('');
  let [error1,seterror1]=useState('');

	let submitdata=async(e)=>{
		e.preventDefault();
		try{
			let user=await createUserWithEmailAndPassword(auth,e.target.email.value,e.target.password.value);
      navigate('/Home')
		}
		catch(error){
			if('auth/weak-password'==error.code){
				seterror('Your password must contain between 4 and 60 characters.')
			}
			else{
				seterror1('This Email is Already exists');
			}
			
		}
	}

  return (
      <>
	  
	    <div className='fbody'>
		<Container>
		<h1 className='word pt-3'>MOVIE APP</h1>
	  		<div className="fmain ">
					<div className="d-flex justify-content-center px-1">
						<div  className="form rounded shadow-lg md:max-w-sm md:mx-auto">
						<span className="signup py-5">Sign In</span> 
						
							<form onSubmit={submitdata} className="form-group" action="/" method="post">
							<div className="mb-4 md:w-full mt-3">
								{/* <label for="email" className="block text-xs mb-1">Username or Email</label> */}
								<input className="form-control einp py-3 px-4" type="email" name="email" id="email" placeholder="Username or Email"/>
								<div className="text-danger">
                              		{error1}
						    	</div>
							</div>
							<div className="mb-6 md:w-full">
								{/* <label for="password" className="block text-xs mb-1 ">Password</label> */}
								<input className="form-control einp py-3 px-4" type="password" name="password" id="password" placeholder="Password"/>
								<div className="text-danger">
                              		{error}
						    	</div>
							</div>
							<button className="sbtn  my-4 sclick">Sign In</button>
							</form>
							
						</div>
 				 	</div>
			</div>
		
		</Container>
	       
	    </div>
          

      </>
  );
}

export default Logins;
