export const content = {
	state: {
		people: {
			superman: {
				uid: 'superman',
				title: 'Superman',
			},
			pinguin: {
				uid: 'pinguin',
				title: 'Pinguin',
			},
		},
	},
	reducers: {
		// setTheme(state, newTheme: THEMES) {
		// 	switch (newTheme) {
		// 		case THEMES.dark:
		// 			return { ...state, activeTheme: dark };
		// 		case THEMES.light:
		// 			return { ...state, activeTheme: light };
		// 		case THEMES.custom:
		// 			return { ...state, activeTheme: customTheme };
		// 		default:
		// 			return {
		// 				...state,
		// 				activeTheme: defaultTheme,
		// 			};
		// 	}
		// },
	},
	effects: (dispatch) => ({}),
};
