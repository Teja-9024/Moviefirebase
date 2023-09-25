import { useState } from 'react';
import { auth } from './Config/Configs';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function Logins() {

  let navigate=useNavigate();

  let [error,seterror]=useState('');

	let submitdata=async(e)=>{
		e.preventDefault();
		try{
			let user=await createUserWithEmailAndPassword(auth,e.target.email.value,e.target.password.value);
      navigate('/Playlist')
		}
		catch(error){
			if('auth/weak-password'==error.code){
				seterror('Please create a Strong password')
			}
			else{
				seterror('This Email is Already exists');
			}
			
		}
	}

  return (
      <>
          <div className="bg-white fmain ">
					<div className="d-flex justify-content-center px-1">
						<div  className=" bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto px-5">
						<span className="signup py-5">Sign Up</span> 
						    <div className="text-danger">
                              {error}
						    </div>
							<form onSubmit={submitdata} className="form-group" action="/" method="post">
							<div className="mb-4 md:w-full mt-3">
								<label for="email" className="block text-xs mb-1">Username or Email</label>
								<input className="form-control" type="email" name="email" id="email" placeholder="Username or Email"/>
							</div>
							<div className="mb-6 md:w-full">
								<label for="password" className="block text-xs mb-1">Password</label>
								<input className="form-control" type="password" name="password" id="password" placeholder="Password"/>
							</div>
							<button className="btn btn-primary my-4">Sign Up</button>
							</form>
							
						</div>
 				 	</div>
		</div>

      </>
  );
}

export default Logins;
