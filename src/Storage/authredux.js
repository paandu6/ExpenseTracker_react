import {createSlice} from '@reduxjs/toolkit'

const AuthContext ={
    token:'',
    isLoggedin:false,
}


const authslicer =createSlice({
    name:'authredux',
    initialState:AuthContext,
    reducers:{
        login(state,action){
            state.isLoggedin=true
            console.log(state.isLoggedin)
            localStorage.setItem('token',action.payload)
        },
        logout(state){
            state.isLoggedin=false
            localStorage.removeItem('token')
        }
    }

    
})

export  const authactions=authslicer.actions

export default authslicer.reducer