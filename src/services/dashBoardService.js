import fetch from "auth/FetchInterceptor";
import { BaseUrl } from "./BaseurlConst";


const dashBoardService = {}

dashBoardService.showAllAlerts = function (data) {
	return fetch({
		url: BaseUrl + '/pipeline/showAllAlerts',
		method: 'GET',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		},
		data: data
	})
}

dashBoardService.myOpportunityAlerts = function (data) {
	return fetch({
		url: BaseUrl + '/pipeline/myOpportunitiesAlerts',
		method: 'GET',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		},
		data: data
	})
}

dashBoardService.myAgencyAlerts = function (data) {
	return fetch({
		url: BaseUrl + '/pipeline/myAgencyAlerts',
		method: 'GET',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		},
		data: data
	})
}

dashBoardService.topAgencySpends = function (data) {
	return fetch({
		url: BaseUrl + '/fetchAgenciespends',
		method: 'post',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		},
		data: data
	})
}

dashBoardService.TeamingAlerts = function (data) {
	return fetch({
		url: BaseUrl + '/pipeline/teamingPartnersAlters',
		method: 'GET',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		},
		data: data
	})
}


export default dashBoardService