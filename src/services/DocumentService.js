import { BaseUrl } from "./BaseurlConst";
import fetch from 'auth/FetchInterceptor';

const Document = {};

Document.documentDisplay = (data) => {
    return fetch({
        url: BaseUrl + `/pipeline/showdocuments`,
        method: 'GET',
        headers: {
            'Accept': 'application/json',
			'Content-Type': 'application/json',
        },
        data: data
    })
}

export default Document;
