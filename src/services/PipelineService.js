import fetch from "auth/FetchInterceptor";
import { BaseUrl } from "./BaseurlConst";

const PipelineService = {}

PipelineService.pipeLine = function (data) {
    return fetch ({
        url: BaseUrl + '/pipeline/showPipeline',
        method: 'GET',
        headers: {
            'Accept': 'application/json',
			'Content-Type': 'application/json',
        },
        data: data
    })
}

PipelineService.deletePipelines = function (data) {
	return fetch({
		url: BaseUrl + `/pipeline/deletePipeline/${data.deleteid}`,
		method: 'DELETE',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		},
	})
}

PipelineService.addpipeline = function (data) {
    return fetch ({
        url: BaseUrl + '/pipeline/addToPipeline',
        method: 'post',
        headers: {
            'Accept': 'application/json',
			'Content-Type': 'application/json',
        },
        data: data
    })
}

export default PipelineService;
