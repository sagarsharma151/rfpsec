import { AUTH_TOKEN } from "redux/constants/Auth"
import { ADD_TO_PIPELINE_FAILED, ADD_TO_PIPELINE_REQUEST, ADD_TO_PIPELINE_SUCCESS, PIPLINE_DELETE_FAILED, PIPLINE_DELETE_REQUEST, PIPLINE_DELETE_SUCCESS, PIPLINE_FAILED, PIPLINE_REQUEST, PIPLINE_SUCCESS } from "redux/constants/Pipeline"

const initState = {
    loading: false,
    message: '',
    token: localStorage.getItem(AUTH_TOKEN),
    pipelineData: '',
    err: '',
    id: '',
    addPipe: '',
}

const Pipeline = (state = initState, action) =>{
    switch (action.type) {
        case PIPLINE_REQUEST :{
            return{
                ...state,
                loading: true,
                pipelineData: action.pipeline
            }
        }
        case PIPLINE_SUCCESS :{
            return{
                ...state,
                loading: true,
                pipelineData: action.pipeline
            }
        }
        case PIPLINE_FAILED :{
            return{
                ...state,
                loading: false,
                err: action.error
            }
        }

        case PIPLINE_DELETE_REQUEST :{
            return{
                ...state,
                loading: true,
                token: action.token,
                id: action.id,
            }
        }
        case PIPLINE_DELETE_SUCCESS :{
            return{
                ...state,
                loading: true,
                token: action.token,
                id: action.id,
            }
        }
        case PIPLINE_DELETE_FAILED :{
            return{
                ...state,
                loading: false,
                err: action.error
            }
        }

        case ADD_TO_PIPELINE_REQUEST :{
            return{
                ...state,
                loading: true,
                token: action.token,
                addPipe: action.addpipeline,
            }
        }
        case ADD_TO_PIPELINE_SUCCESS :{
            return{
                ...state,
                loading: false,
                token: action.token,
                addPipe: action.addpipeline,
            }
        }
        case ADD_TO_PIPELINE_FAILED :{
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

export default Pipeline;