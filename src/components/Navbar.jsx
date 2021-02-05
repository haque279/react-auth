import React, { useContext, useState, useEffect, Fragment } from 'react';
import { Route, Link, Switch, withRouter } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import Developers from './Developers';
import Profile from './Profile';
import NotFound from './NotFound';
import { AuthContext } from '../context/AuthContext';
import PrivateRoute from '../util/PrivateRoute';
import MyProfile from './profile/MyProfile';

function Navbar(props) {
	const { logout, auth } = useContext(AuthContext);
	
	const checkExp = () => {
		if(auth.token) {
			const decode = jwt_decode(auth.token);
		console.log(decode.exp)
		const now = Date.now()/1000;
		console.log(now)
		if(now > decode.exp){
			logout();
			props.history.push('/login')
		}
		}
	}
	useEffect(()=>{
		checkExp();
	}, [props.history.location] )
	return (
		<div>
			<nav className='navbar navbar-expand-sm navbar-dark bg-theme mb-4'>
				<div className='container'>
					<Link className='navbar-brand' to='/'>
						DevConnector
					</Link>
					<button
						className='navbar-toggler'
						type='button'
						data-toggle='collapse'
						data-target='#mobile-nav'
					>
						<span className='navbar-toggler-icon'></span>
					</button>

					<div className='collapse navbar-collapse' id='mobile-nav'>
						<ul className='navbar-nav mr-auto'>
							<li className='nav-item'>
								<Link className='nav-link' to='/developers'>
									Developers {auth.name}
								</Link>
							</li>
						</ul>

						<ul className='navbar-nav ml-auto'>
							<li className='nav-item'>
								<Link className='nav-link' to='/signup'>
									Sign Up
								</Link>
							</li>

							{auth.isAuth ? (
								<Fragment>
									<li className='nav-item'>
									<Link
										className='nav-link'
										to='/login'
										onClick={() => {
											logout();
										}}
									>
										Logout
									</Link>
								</li>
								<li className='nav-item'>
									<Link
										className='nav-link'
										to='/my-profile'
									>
										{auth.name}
									</Link>
								</li>
								</Fragment>
							) : (
								<li className='nav-item'>
									<Link className='nav-link' to='/login' t>
										Login
									</Link>
								</li>
							)}
						</ul>
					</div>
				</div>
			</nav>
			<Switch>
				<Route exact path='/'   component={Home} />
				<Route path='/login'  component={Login}  />
				<Route path='/signup' component={Signup} />
				<PrivateRoute path='/developers'  component={Developers} />
				<PrivateRoute path='/my-profile'  component={MyProfile} />
				<Route path='/profile' component={Profile} />
				<Route path='*' component={NotFound} />
			</Switch>
		</div>
	);
}


export default withRouter(Navbar)