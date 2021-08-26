
import React, { createContext ,useContext, useReducer , useEffect} from 'react'
import { UserInitialState, UserReducer } from '../reducer/UserReducer'
import { CheckUser, GetContactsUser } from '../actions/UserActions'


const Context = createContext()
export default function UserProvider({children}) {
    
    const [userState, userDispatch] = useReducer(UserReducer, UserInitialState)
    
    useEffect(()=>{
        GetContactsUser(userDispatch, userState._id)
    }, [userState._id])
    useEffect(()=>{
        CheckUser(userDispatch)
    },[])
    return (
        <Context.Provider value={{userState,userDispatch}}>
            <Context.Consumer>
                {
                    ()=>children
                }
            </Context.Consumer>
        </Context.Provider>
    )
}

export const useUser=(onlyDispatch)=>{
    const { userState, userDispatch } = useContext(Context)
    return onlyDispatch ? [userDispatch] : [userState, userDispatch]
}
