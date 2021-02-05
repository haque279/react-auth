import React, { useContext } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Developers from './components/Developers';
import AuthContextProvider from './context/AuthContext';
import ProfileContextProvider from './context/ProfileContext';

function App() {
	return (
		<AuthContextProvider>
			<ProfileContextProvider>
				<Router>
					<Navbar />
				</Router>
			</ProfileContextProvider>
		</AuthContextProvider>
	);
}

export default App;
