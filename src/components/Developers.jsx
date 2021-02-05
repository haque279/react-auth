import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProfileContext } from '../context/ProfileContext';

export default function Developers() {
	const { profiles } = useContext(ProfileContext);
	return (
		<div className='profiles'>
			<div className='container'>
				<div className='row'>
					<div className='col-md-12'>
						<h1 className='display-4 text-center'>Developer Profiles</h1>
						<p className='lead text-center'>
							Browse and connect with developers
						</p>
						{console.log(typeof(profiles.bio))}

						{profiles
							? profiles.map((profile, key) => (
									<div key={key} className='card card-body bg-light mb-3'>
										<div className='row'>
											<div className='col-2'>
												<img
													className='rounded-circle'
													src='https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200'
													alt=''
												/>
											</div>
											<div className='col-lg-6 col-md-4 col-8'>
												<h3>John Doe</h3>
												<p>{profile.bio}</p>
												<p>{profile.location}</p>
												<Link to='/profile' className='btn btn-info'>
													View Profile
												</Link>
											</div>
											<div className='col-md-4 d-none d-lg-block'>
												<h4>Skill Set</h4>
												<ul className='list-group'>
													{ profile.skills.map((skill, key) => (
														<li className='list-group-item' key={key}>
														<i className='fa fa-check pr-1'></i>{skill}
													</li>
													)) }
													
													
												</ul>
											</div>
										</div>
									</div>
							  ))
							: 'no developer found'}
					</div>
				</div>
			</div>
		</div>
	);
}
