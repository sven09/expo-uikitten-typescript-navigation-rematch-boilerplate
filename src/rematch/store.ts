import { init, RematchRootState } from '@rematch/core';
import createLoadingPlugin from '@rematch/loading';
import { useDispatch } from 'react-redux';

import * as models from './models';

const loading = createLoadingPlugin({});

export const store = init({
	models,
	plugins: [loading],
});

export interface ILoadingPlugin {
	loading: {
		models: RematchRootState<typeof models>;
		effects: typeof store.dispatch;
	};
}

export type Store = typeof store;
export type Dispatch = typeof store.dispatch;
export type IRootState = RematchRootState<typeof models> & ILoadingPlugin;

export const useRematchDispatch = <D extends {}, MD>(selector: (dispatch: D) => MD) => {
	const dispatch = useDispatch<D>();
	return selector(dispatch);
};
