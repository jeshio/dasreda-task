import { combineReducers } from 'redux';
import * as Filters from 'src/modules/Filters';

export default combineReducers({
	[Filters.NAME]: Filters.reducer,
});
