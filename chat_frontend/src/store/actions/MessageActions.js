import { axios } from '../../services/axios'
import * as messageActions from '../constants/Messages'

export const recieveMessage =(dispatch, message)=>{
    dispatch({type:messageActions.MESSAGE_NEW_MESSAGE,payload:message })
}

export const getAllMessages =(dispatch) => {
    dispatch({type:messageActions.MESSAGE_LOADING_START, payload:true})
    axios.get('/messages')
    .then(res => {
        dispatch({type:messageActions.MESSAGE_LOADING_SUCCESS, payload:res.data})
    })
    .catch(error=>{
        dispatch({type:messageActions.MESSAGE_LOADING_ERROR, payload:error})
    })
    dispatch({type:messageActions.MESSAGE_LOADING_START, payload:false})
}
