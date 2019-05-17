import { combineReducers } from 'redux';
import * as Repositories from './modules/Repositories';

export default combineReducers({
	[Repositories.MODULE_NAME]: Repositories.moduleReducer,
});
