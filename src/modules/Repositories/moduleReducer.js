import { combineReducers } from 'redux';
import * as Filters from './Filters';

export default combineReducers({
	[Filters.NAME]: Filters.reducer,
});
