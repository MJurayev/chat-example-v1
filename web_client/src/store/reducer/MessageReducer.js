import * as messageActions from '../constants/Messages'

export const MessageInitialState = {
    isLoading:false,
    error:null,
    messages:[]
}

export const MessageReducer=(state, action)=>{
    switch(action.type){
        case messageActions.MESSAGE_NEW_MESSAGE:return {...state, messages:[...state.messages, ...[action.payload]]}
        
        case messageActions.MESSAGE_LOADING_START:return { ...state, loading:action.payload}
        
        case messageActions.MESSAGE_LOADING_SUCCESS:return { ...state, messages:action.payload}

        case messageActions.MESSAGE_LOADING_ERROR:return {...state, error:action.payload}


        default:return {...MessageInitialState}
    }
}