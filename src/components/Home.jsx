import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export default function Home(props) {
  const { auth } = useContext(AuthContext);
	
  
	return (
		<div className='landing'>
			<div className='dark-overlay landing-inner text-light'>
				<div className='container'>
					<div className='row'>
						<div className='col-md-12 text-center'>
							<h1 className='display-3 mb-4'>Developer Connector</h1>
							<p className='lead'>
								Create a developer profile/portfolio, share posts and get help
								from other developers
								
							</p>
							<hr />
							<p>{auth.name}</p>
							<p>{auth.email}</p>
							<p>{auth.token}</p>
							<Link to='/signup' className='btn btn-lg btn-info mr-2'>
								Sign Up
							</Link>
							<Link to='/login' className='btn btn-lg btn-light'>
								Login
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
