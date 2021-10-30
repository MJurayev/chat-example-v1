import * as activeChatActions from '../constants/ActiveChat'

export const activeChatInitialState = {
    chat_id:null,
    chat_type:"NONE", // default NONE , ENUM:['CHANNEL','GROUP', 'USER']
    chat_messages:[],
    loading:false,
    error:null
}

export const activeChatReducer =(state, action)=>{
    switch(action.type){
        case activeChatActions.ACTIVE_CHAT_INFOs_SET: return { 
            ...state,
            ...{
                chat_id:action.payload.chat_id,
                chat_type:action.payload.chat_type
            }
        }

        default: return {...state}
    }
    
}