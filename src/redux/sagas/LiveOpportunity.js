import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { liveOpportunityFailed, liveOpportunitySuccess, searchOpportunityFailed, searchOpportunitySuccess } from "redux/actions/LiveOpportunity";
import { LIVE_OPPORTUNITY_REQUEST, SEARCH_REQUEST } from "redux/constants/LiveOpportunity";
import liveOpportunityService from "services/liveOpportunityService"

export function* liveOppotunityRequest() {
    yield takeEvery(LIVE_OPPORTUNITY_REQUEST, function* ({payload}) {

        try {
            const users = yield call(liveOpportunityService.liveOpportunity, payload);
            if (users.success === true) {
                yield put(liveOpportunitySuccess(users.data))
            }else {
                yield put(liveOpportunityFailed(users.message))
            }
        } catch (error) {
            yield put(liveOpportunityFailed(error.message))
        }
    });
}

export function* searchOpportunity() {
	yield takeEvery(SEARCH_REQUEST, function* ({ payload }) {
		console.log('payload-request', payload.request);
		try {
			const users = yield call(liveOpportunityService.searchDashboardData, payload.request);
			console.log('users', users);
		if(users.success === true){
            yield put(searchOpportunitySuccess(users.allAlerts));
			} else {
				yield put(searchOpportunityFailed(users.message));
			}
		} catch (users) {
			yield put(searchOpportunityFailed(users.message));
		}
	});
}

export default function* rootSaga() {
    yield all([
        fork(liveOppotunityRequest),
		fork(searchOpportunity),
    ])
}