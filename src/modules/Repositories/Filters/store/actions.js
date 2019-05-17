import * as actionTypes from './actionTypes';

export const changeFilters = fields => ({
	type: actionTypes.CHANGE_FILTERS,
	payload: fields,
});
