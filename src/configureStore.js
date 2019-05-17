import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

export default function configureStore(initialState = {}) {
	const middlewares = [thunk];
	const enhancers = [];

	if (process.env.NODE_ENV === 'development') {
		const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

		if (typeof devToolsExtension === 'function') {
			enhancers.push(devToolsExtension());
		}

		const logger = createLogger();
		middlewares.push(logger);
	}

	const composedEnhancers = compose(
		applyMiddleware(...middlewares),
		...enhancers
	);

	return createStore(rootReducer, initialState, composedEnhancers);
}
