const authReducer = (state, action) => {
	switch (action.type) {
		case 'LOGIN':
			return {
				token: action.payload.token,
				isAuth: action.payload.isAuth,
				name: action.payload.name,
				email: action.payload.email
			};

		default:
			return state;
	}
};

export default authReducer;
