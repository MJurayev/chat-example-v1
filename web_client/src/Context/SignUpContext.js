import React, { createContext, useContext, useEffect, useState } from 'react'
const Context = createContext()
export default function SignUpContext({children}) {
    const [info, setInfo] = useState({
        firstname:"",
        lastname:"",
        password:"",
        password_repeat:"",
        phone:"",
        code:""
    })
    useEffect(()=>{
        console.log(info)
    }, [info])
    return (
        <Context.Provider value={{info, setInfo}}>
            <Context.Consumer>
                {
                    ()=>children
                }
            </Context.Consumer>
        </Context.Provider>
    )
}

export const useSignUp = (setterOnly) => {
    const { info, setInfo } = useContext(Context)
    return setterOnly ?  [setInfo] : [ info, setInfo ]
}
