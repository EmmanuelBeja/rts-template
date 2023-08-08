import { combineReducers } from 'redux';
import settingsReducer from '../../../pages/Settings/reducer';

const reducers = combineReducers({
  settings: settingsReducer
});

export default reducers;

// This is the type definition for the state of the store
export type RootState = ReturnType<typeof reducers>;
