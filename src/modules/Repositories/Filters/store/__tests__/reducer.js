import reducer from '..';
import initialState from '../initialState';
import * as actionTypes from '../actionTypes';

describe('reducer', () => {
	it('should return the initial state', () => {
		expect(reducer(undefined, {})).toEqual(initialState());
	});

	it('should handle CHANGE_FILTERS', () => {
		const _initialState = initialState();
		expect(
			reducer(_initialState, {
				type: actionTypes.CHANGE_FILTERS,
				payload: { license: 'mit' },
			})
		).toEqual({
			..._initialState,
			license: 'mit',
		});

		expect(
			reducer(_initialState, {
				type: actionTypes.CHANGE_FILTERS,
				payload: { license: 'mit', name: 'prettier' },
			})
		).toEqual({
			..._initialState,
			license: 'mit',
			name: 'prettier',
		});

		expect(
			reducer(
				{ ..._initialState, license: 'mit', name: 'prettier' },
				{
					type: actionTypes.CHANGE_FILTERS,
					payload: { name: 'react' },
				}
			)
		).toEqual({
			..._initialState,
			license: 'mit',
			name: 'react',
		});
	});
});
