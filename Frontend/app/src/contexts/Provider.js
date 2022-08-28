import React from "react"
import {globalReducer} from "./reducers/index";
import initialState from "./initialState/index"

export const GlobalContext = React.createContext();


const GlobalProvider = ({children}) =>{
    const [state,dispatch] = React.useReducer(globalReducer,initialState);
    return (
        <GlobalContext.Provider value={{state,dispatch}} >{children}</GlobalContext.Provider>
    )
}


export default GlobalProvider;