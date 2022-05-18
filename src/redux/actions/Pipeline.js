import { PIPLINE_DELETE_FAILED, PIPLINE_DELETE_SUCCESS, PIPLINE_DELETE_REQUEST, PIPLINE_FAILED, PIPLINE_REQUEST, PIPLINE_SUCCESS, ADD_TO_PIPELINE_REQUEST, ADD_TO_PIPELINE_SUCCESS, ADD_TO_PIPELINE_FAILED } from "redux/constants/Pipeline"

export const pipelineRequest = (pipeline) =>{
    return{
        type: PIPLINE_REQUEST,
        payload:pipeline
    }
}
export const pipelineRequestSuccess = (pipeline) =>{
    return{
        type: PIPLINE_SUCCESS,
        pipeline
    }
}
export const pipelineRequestFailed = (message) =>{
    return{
        type: PIPLINE_FAILED,
        message
    }
}

export const pipelineDelete = (id) =>{
    return{
        type: PIPLINE_DELETE_REQUEST,
        payload:id
    }
}
export const pipelineDeleteSuccess = (id) =>{
    return{
        type: PIPLINE_DELETE_SUCCESS,
        id
    }
}
export const pipelineDeleteFailed = (message) =>{
    return{
        type: PIPLINE_DELETE_FAILED,
        message
    }
}

export const addtoPipeline = (addpipeline) =>{
    return{
        type: ADD_TO_PIPELINE_REQUEST,
        payload:addpipeline
    }
}
export const addtoPipelineSuccess = (addpipeline) =>{
    return{
        type: ADD_TO_PIPELINE_SUCCESS,
        addpipeline
    }
}
export const addtoPipelineFailed = (message) =>{
    return{
        type: ADD_TO_PIPELINE_FAILED,
        message
    }
}