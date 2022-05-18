import { DOCUMENT_REQUEST } from "redux/constants/Document";
import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { documentRequestFailed, documentRequestSuccess } from "redux/actions/Document";
import Document from "services/DocumentService";

export function* documentRequest() {
    yield takeEvery(DOCUMENT_REQUEST, function* ({payload}) {

        try {
            const users = yield call(Document.documentDisplay, payload);
            if (users.success === true) {
                yield put(documentRequestSuccess(users.documents))
            }else {
                yield put(documentRequestFailed(users.message))
            }
        } catch (error) {
            yield put(documentRequestFailed(error.message))
        }
    });
}

export default function* rootSaga() {
    yield all([
        fork(documentRequest),
    ])
}