const ProfileReducer = (state, action) => {
	switch (action.type) {
		case 'ALL_PROFILE':
			return action.payload;
		case 'MY_PROFILE' :
			return [...state, {myProfile: action.payload}]
		default:
			return state;
	}
};

export default ProfileReducer;


