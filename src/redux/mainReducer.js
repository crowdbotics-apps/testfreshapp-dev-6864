import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import CopyOfEmailAuth9065Reducer from '../features/CopyOfEmailAuth9065/redux/reducers';
import CopyOfEmailAuth9064Reducer from '../features/CopyOfEmailAuth9064/redux/reducers';
import CopyOfEmailAuth9062Reducer from '../features/CopyOfEmailAuth9062/redux/reducers';
import CalendarReducer from '../features/Calendar/redux/reducers';
import EmailAuthReducer from '../features/EmailAuth/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
CopyOfEmailAuth9065: CopyOfEmailAuth9065Reducer,
CopyOfEmailAuth9064: CopyOfEmailAuth9064Reducer,
CopyOfEmailAuth9062: CopyOfEmailAuth9062Reducer,
Calendar: CalendarReducer,
EmailAuth: EmailAuthReducer,

});