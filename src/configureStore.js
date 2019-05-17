import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

export default function configureStore(initialState = {}) {
	const middlewares = [thunk];
	const rootReducer = state => state;

	if (process.env.NODE_ENV === 'development') {
		const logger = createLogger();
		middlewares.push(logger);
	}

	return createStore(
		rootReducer,
		initialState,
		applyMiddleware(...middlewares)
	);
}
