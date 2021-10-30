import { createContext, useContext, useEffect, useReducer } from "react";
import { selectChat } from "../actions/ActiveChatActions";
import { activeChatInitialState, activeChatReducer } from "../reducer/ActiveChatReducer";

const Context = createContext()

export default function ActiveChatProvider({children}) {
    const [ activeChatState, activeChatDispatch ] = useReducer(activeChatReducer, activeChatInitialState)
    useEffect(()=>{
        const chat_id_local = localStorage.getItem('current_chat_id')
        const chat_type_local = localStorage.getItem('current_chat_type')
        if(chat_id_local && chat_type_local)
            selectChat(activeChatDispatch, chat_id_local, chat_type_local)
    }, [])
    return (
        <Context.Provider value={{activeChatState, activeChatDispatch}}>
            <Context.Consumer>
                {
                    ()=>children
                }
            </Context.Consumer>
        </Context.Provider>
    )
}

export const useActiveChat =(dispatchOnly) =>{
    const {activeChatState, activeChatDispatch} = useContext(Context)
    return dispatchOnly ? [activeChatDispatch] : [activeChatState, activeChatDispatch] 
}
