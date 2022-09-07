import { createSlice } from "@reduxjs/toolkit";


const initialState={
    expensedata:[],
    totalamount:0
}

const expenseslicer=createSlice({
    name:'expenseslicer',
    initialState:initialState,
    reducers:{
            addedexpenses(state,action){
                
                state.expensedata=[...state.expensedata,action.payload]
            },
            totalamount(state,action){
                state.totalamount=state.totalamount+action.payload
            }
    }
})

export default expenseslicer.reducer
export const expenseactions= expenseslicer.actions