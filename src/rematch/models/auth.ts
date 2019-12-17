import { IRootState, Dispatch } from '../store';

export const auth = {

	state:{
		isAuthorized: false,
		user: null
	},
	reducers: {
		setLoggedIn(state, user) {
			return {
				...state,
				isAuthorized: true,
				user
			};
		},
		setLoggedOut(state) {
			return {
				...state,
				isAuthorized: false,
				user: null
			};
		},
	},
	effects: (dispatch) => ({
		async loginAsync(payload, state: IRootState) {
			
			try {
				const { user, password } = payload;
				// fake
				dispatch.auth.setLoggedIn(user);
			} catch (error) {
				console.log(error);
				dispatch.auth.setLoggedOut();
			}
		},
		async logoutAsync(payload, state: IRootState) {
			try {
				// fake
				dispatch.auth.setLoggedOut();
			} catch (error) {
				console.log(error);
				dispatch.auth.setLoggedOut();
			}
		},
	}),
};
