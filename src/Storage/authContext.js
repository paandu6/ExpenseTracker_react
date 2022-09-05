import React, { useState } from "react"

const AuthContext =React.createContext({
    token:'',
    isLoggedin:false,
    Login:(token)=>{},
    Logout:()=>{}

})



export const AuthContextProvider=(props)=>{
    const [token,setToken]=useState(null)

    let userLoggedIn= !!token
    function loginHandler(token){
        setToken(token)
        localStorage.setItem('token',token)
    }

    function logoutHandler(){
        setToken(null)
    }
    const ctx={
        token:token,
        isLoggedin:userLoggedIn,
        Login:loginHandler,
        Logout:logoutHandler
    }
    return(
        <AuthContext.Provider value={ctx}> {props.children}</AuthContext.Provider>
    )
}
export default AuthContext