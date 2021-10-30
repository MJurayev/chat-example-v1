import * as activeChatActions from '../constants/ActiveChat'
export const selectChat=(dispatch, chat_id, chat_type)=>{
   
        localStorage.setItem("current_chat_id",chat_id)
        localStorage.setItem("current_chat_type",chat_type)    
    
        dispatch({type:activeChatActions.ACTIVE_CHAT_INFOs_SET, payload:{chat_id, chat_type }})
}