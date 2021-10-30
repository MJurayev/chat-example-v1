import { createContext, useContext, useReducer } from "react";
import { MessageInitialState, MessageReducer } from "../reducer/MessageReducer";
import * as messageActions from '../constants/Messages'
import socket from "../../services/socket";
import { useEffect } from "react";
const Context = createContext()

export default function MessageProvider({children}) {

    const [messageState, messageDispatch] = useReducer(MessageReducer, MessageInitialState)

    useEffect(()=>{
        socket.on('send_message_request_to_client', (message)=>{
            messageDispatch({type:messageActions.MESSAGE_NEW_MESSAGE, payload:message})
            console.log(message)
        })
        socket.on('send_message_error', (error)=>{
            messageDispatch({type:messageActions.MESSAGE_LOADING_ERROR, payload:error})
        })
    }, [])
    return (
        <Context.Provider value={{messageState, messageDispatch}}>
            <Context.Consumer>
                {
                    ()=>children
                }
            </Context.Consumer>
        </Context.Provider>
    )
}

export const useMessages =(dispatchOnly) =>{
    const {messageState, messageDispatch} = useContext(Context)
    return dispatchOnly ? [messageDispatch] : [messageState, messageDispatch] 
}
