import { all, put, fork, call, takeLatest, takeEvery } from 'redux-saga/effects';
import { allAlertsRequestFailed, allAlertsRequestSuccess, myAgencyAlertsSuccess, myAgencyAlertsFailed, MyOpportunityRequestFailed, MyOpportunityRequestSuccess, topAgencySpendsFailed, topAgencySpendsSuccess, teamingAlertsSuccess, teamingAlertsFailed } from "redux/actions/Dashboard";
import { ALL_ALERTS_REQUEST, MYAGENCYALERTS_REQUEST, MYOPPORTUNITY_REQUEST, TEAMING_ALERTS_REQUEST, TOP_AGENCY_SPENDS } from "redux/constants/Dashboard";
import dashBoardService from "services/dashBoardService";
import { notification } from 'antd';

export function* allAlertsRequest(action) {
	try {
		const users = yield call(dashBoardService.showAllAlerts);
		if(users.success === true){
		
			yield put(allAlertsRequestSuccess(users.allAlerts));
		}else{
			yield put(allAlertsRequestFailed(users.message));
			notification['error']({
				message: 'All Alerts Data Not Found',
				description: '',
			});
		}
	} catch (error) {
		yield put(allAlertsRequestFailed(error.message));
	}
 }
export function* watchRequest() {
	yield takeLatest(ALL_ALERTS_REQUEST, allAlertsRequest);
 }

 export function* myOpportunityRequest(action) {
	try {
		const users = yield call(dashBoardService.myOpportunityAlerts);
		if(users.success === true){

			yield put(MyOpportunityRequestSuccess(users.Alerts));
		}else{
			yield put(MyOpportunityRequestFailed(users.message));
			notification['error']({
				message: 'My Opportunity Data Not Found',
				description: '',
			});
		}
	} catch (error) {
		yield put(MyOpportunityRequestFailed(error.message));
	}
 }
export function* watchMyOpportunity() {
	yield takeLatest(MYOPPORTUNITY_REQUEST, myOpportunityRequest);
 }

 export function* myAgencyRequest(action) {
	try {
		const users = yield call(dashBoardService.myAgencyAlerts);
		if(users.success === true){

			yield put(myAgencyAlertsSuccess(users.Alerts));
		}else{
			yield put(myAgencyAlertsFailed(users.message));
			notification['error']({
				message: 'My Agency Data Not Found',
				description: '',
			});
		}
	} catch (error) {
		yield put(myAgencyAlertsFailed(error.message));
	}
 }
export function* watchMyAgency() {
	yield takeLatest(MYAGENCYALERTS_REQUEST, myAgencyRequest);
 }

 export function* topAgencyspends() {
	yield takeEvery(TOP_AGENCY_SPENDS, function* ({ payload }) {

		try {
			const users = yield call(dashBoardService.topAgencySpends, payload);
		if(users.success === true){
            yield put(topAgencySpendsSuccess(users.data));
			} else {
				yield put(topAgencySpendsFailed(users.message));
				notification['error']({
					message: 'Top Agency Data Not Found',
					description: '',
				});
			}
		} catch (error) {
			yield put(topAgencySpendsFailed(error.message));
		}
	});
}

export function* teamingAlerts() {
	yield takeEvery(TEAMING_ALERTS_REQUEST, function* ({ payload }) {

		try {
			const users = yield call(dashBoardService.TeamingAlerts, payload);
		if(users.success === true){
            yield put(teamingAlertsSuccess(users.Alerts));
			} else {
				yield put(teamingAlertsFailed(users.message));
				notification['error']({
					message: 'Teaming Alerts Data Not Found',
					description: '',
				});
			}
		} catch (error) {
			yield put(teamingAlertsFailed(error.message));
		}
	});
}

export default function* rootSaga() {
	yield all([
		fork(watchRequest),
        fork(watchMyOpportunity),
        fork(watchMyAgency),
        fork(topAgencyspends),
		fork(teamingAlerts),
	]);
}