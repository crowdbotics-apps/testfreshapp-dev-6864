import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import CopyOfEmailAuth9063Reducer from '../features/CopyOfEmailAuth9063/redux/reducers';
import CopyOfEmailAuth9062Reducer from '../features/CopyOfEmailAuth9062/redux/reducers';
import CalendarReducer from '../features/Calendar/redux/reducers';
import EmailAuthReducer from '../features/EmailAuth/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
CopyOfEmailAuth9063: CopyOfEmailAuth9063Reducer,
CopyOfEmailAuth9062: CopyOfEmailAuth9062Reducer,
Calendar: CalendarReducer,
EmailAuth: EmailAuthReducer,

});