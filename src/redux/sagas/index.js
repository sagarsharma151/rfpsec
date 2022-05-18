import { all } from 'redux-saga/effects';
import Auth from './Auth';
import profile from "./profile";
import Dashboard from "./Dashboard";
import LiveOpportunity from "./LiveOpportunity";
import Pipeline from "./Pipeline";
import Document from "./Document";

export default function* rootSaga(getState) {
  yield all([
    profile(),
    Auth(),
    Dashboard(),
    LiveOpportunity(),
    Pipeline(),
    Document()
  ]);
}

