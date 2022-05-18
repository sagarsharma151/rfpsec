import { DOCUMENT_REQUEST, DOCUMENT_REQUEST_FAILED, DOCUMENT_REQUEST_SUCCESS } from "redux/constants/Document"

export const documentRequest = (document) =>{
    return{
        type: DOCUMENT_REQUEST,
        payload:document
    }
}
export const documentRequestSuccess = (document) =>{
    return{
        type: DOCUMENT_REQUEST_SUCCESS,
        document
    }
}
export const documentRequestFailed = (message) =>{
    return{
        type: DOCUMENT_REQUEST_FAILED,
        message
    }
}