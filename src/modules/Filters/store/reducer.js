import initialState from './initialState';
import * as actionTypes from './actionTypes';

export default (state = initialState(), action) => {
	switch (action.type) {
		case actionTypes.CHANGE_FILTERS:
			return { ...state, ...action.payload };
		default:
			return state;
	}
};
