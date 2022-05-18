import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { addtoPipelineFailed, addtoPipelineSuccess, pipelineDeleteFailed, pipelineDeleteSuccess, pipelineRequestFailed, pipelineRequestSuccess } from "redux/actions/Pipeline";
import { PIPLINE_REQUEST, PIPLINE_DELETE_REQUEST, ADD_TO_PIPELINE_REQUEST } from "redux/constants/Pipeline";
import PipelineService from "services/PipelineService";
import { notification } from 'antd';


export function* pipeLineRequest() {
    yield takeEvery(PIPLINE_REQUEST, function* ({payload}) {

        try {
            const users = yield call(PipelineService.pipeLine, payload);
            if (users.success === true) {
                yield put(pipelineRequestSuccess(users.allAlerts))
            }else {
                yield put(pipelineRequestFailed(users.message))
            }
        } catch (error) {
            yield put(pipelineRequestFailed(error.message))
        }
    });
}

export function* deletePipeline() {
	yield takeEvery(PIPLINE_DELETE_REQUEST, function* ({ payload }) {
        console.log('saga-payload', payload);
		try {
			const user = yield call(PipelineService.deletePipelines, payload)
			console.log('user', user);
			if (user.success === true) {
				yield put(pipelineDeleteSuccess(user));
				notification['success']({
					message: 'Opportunity Deleted',
					description: '',
				});
				window.location.reload();
			} else {
				yield put(pipelineDeleteFailed(user.message));
				notification['error']({
					message: user.message,
					description: '',
				});
			}
		} catch (error) {
			yield put(pipelineDeleteFailed(error));
		}
	});
}

export function* addtopipeline() {
	yield takeEvery(ADD_TO_PIPELINE_REQUEST, function* ({ payload }) {
		try {
			const user = yield call(PipelineService.addpipeline, payload)
			console.log('user', user);
			if (user.success === true) {
				yield put(addtoPipelineSuccess(user));
				notification['success']({
					message: 'opportunity added successfully',
					description: '',
				});
				
			} else {
				yield put(addtoPipelineFailed(user.message));
				notification['error']({
					message: user.message,
					description: '',
				});
			}
		} catch (error) {
			yield put(addtoPipelineFailed(error));
		}
	});
}

export default function* rootSaga() {
    yield all([
        fork(pipeLineRequest),
        fork(deletePipeline),
		fork(addtopipeline),
    ])
}