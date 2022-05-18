import fetch from "auth/FetchInterceptor";
import { BaseUrl } from "./BaseurlConst";

const liveOpportunityService = {}

liveOpportunityService.liveOpportunity = function (data) {
    return fetch ({
        url: BaseUrl + '/ShowAllLiveOpp',
        method: 'GET',
        headers: {
            'Accept': 'application/json',
			'Content-Type': 'application/json',
        },
        data: data
    })
}

liveOpportunityService.searchDashboardData = function (data) {
    console.log('payloadrequest', data);
	return fetch({
		url: BaseUrl + `/superAdmin/filterOpportunities?typeOfSetAside=${data.typeOfSetAside? data.typeOfSetAside:''}&NAICSCodes=${data.NAICSCodes? data.NAICSCodes:''}&solicitationNumber=${data.solicitationNumber? data.solicitationNumber:''}&OpportunityType=${data.OpportunityType? data.OpportunityType:''}`,
		method: 'GET',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		},
		data: data
	})
}

export default liveOpportunityService;
