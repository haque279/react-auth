import React, { createContext, useReducer, useEffect } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode'
import authReducer from './reducers/authReducer';

export const AuthContext = createContext();

export default function AuthContextProvider(props) {
	const [auth, dispatch] = useReducer(authReducer, {}, () => {
		const localData = localStorage.getItem('auth');
		return localData ? JSON.parse(localData) : {};
	});
	const login = async (email, password) => {
		const token = await axios.post('http://localhost:4000/api/user/login', {
			email,
			password
		});
		if (token.data.error) {
			console.log(token.data.error);
			localStorage.setItem('error', token.data.error);
		} else {
			const user = jwt_decode(token.data)
			console.log(user)
			dispatch({
				type: 'LOGIN',
				payload: {
					token: token.data,
					isAuth: true,
					name: user.name,
					email: user.email
				}
			});
		}
	};

	const logout = () => {
		dispatch({
			type: 'LOGIN',
			payload: {
				token: '',
					isAuth: false,
					name: '',
					email: ''
			}
		});
	};

	const signup = async (name, email, password) => {
		const token = await axios.post('http://localhost:4000/api/user/register', {
			name,
			email,
			password
		});
		if (token.data.error) {
			localStorage.setItem('error', token.data.error);
		} else {
			dispatch({
				type: 'LOGIN',
				payload: {
					token: token.data
				}
			});
		}
	};

	useEffect(() => {
		localStorage.setItem('auth', JSON.stringify(auth));
	}, [auth]);

	return (
		<AuthContext.Provider value={{ auth, login, logout, signup }}>
			{props.children}
		</AuthContext.Provider>
	);
}
