import * as actions from '../actions';
import * as actionTypes from '../actionTypes';

describe('actions', () => {
	it('should create an action to change license filter', () => {
		const license = 'mit';
		const expectedAction = {
			type: actionTypes.CHANGE_FILTERS,
			payload: { license },
		};
		expect(actions.changeFilters({ license })).toEqual(expectedAction);
	});

	it('should create an action to change multiple filters', () => {
		const license = 'mit';
		const name = 'prettier';
		const expectedAction = {
			type: actionTypes.CHANGE_FILTERS,
			payload: { license, name },
		};
		expect(actions.changeFilters({ license, name })).toEqual(expectedAction);
	});
});
