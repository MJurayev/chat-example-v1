import React, { createContext, useContext, useState } from 'react'
const Context = createContext()
export default function ThemeContext({children}) {
    const [dark, setDark] = useState(false)
    return (
        <Context.Provider value={{dark, setDark}}>
            <Context.Consumer>
                {
                    ()=>children
                }
            </Context.Consumer>
        </Context.Provider>
    )
}

export const useTheme =(setterOnly)=>{
    const {dark, setDark} = useContext(Context)
    return  setterOnly ? [setDark] : [dark, setDark]
}