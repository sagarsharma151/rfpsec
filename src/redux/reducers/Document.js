import { AUTH_TOKEN } from "redux/constants/Auth"
import { DOCUMENT_REQUEST, DOCUMENT_REQUEST_FAILED, DOCUMENT_REQUEST_SUCCESS } from "redux/constants/Document"

const initState = {
    loading: false,
    message: '',
    token: localStorage.getItem(AUTH_TOKEN),
    documentData: '',
    err: '',
}

const Document = (state = initState, action) =>{
    switch (action.type) {
        case DOCUMENT_REQUEST :{
            return{
                ...state,
                loading: true,
                token: action.token,
                documentData: action.document
            }
        }
        case DOCUMENT_REQUEST_SUCCESS :{
            return{
                ...state,
                loading: true,
                token: action.token,
                documentData: action.document
            }
        }
        case DOCUMENT_REQUEST_FAILED :{
            return{
                ...state,
                loading: false,
                err: action.error
            }
        }
    
        default:
            return state;
    }
}

export default Document;