import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import CopyOfEmailAuth9065Saga from '../features/CopyOfEmailAuth9065/redux/sagas';
import CopyOfEmailAuth9064Saga from '../features/CopyOfEmailAuth9064/redux/sagas';
import CopyOfEmailAuth9062Saga from '../features/CopyOfEmailAuth9062/redux/sagas';
import CalendarSaga from '../features/Calendar/redux/sagas';
import EmailAuthSaga from '../features/EmailAuth/redux/sagas';

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga),
    // other sagas go here


    //@BlueprintReduxSagaMainInsertion
CopyOfEmailAuth9065Saga,
CopyOfEmailAuth9064Saga,
CopyOfEmailAuth9062Saga,
CalendarSaga,
EmailAuthSaga,
    
  ]);
}