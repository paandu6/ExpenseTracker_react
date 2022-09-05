import React, { useState } from "react";

const ExpenseContext =React.createContext({
    expense:[],
    addexpense:(expense)=>{},
    editexpenses:()=>{},
    deleteexpenses:()=>{}
})

export const  ExpensesContectProvider=(props)=>{

    const[addedexpenses,setexpenses]=useState([])

    function addexpensehandler(expense){
        // console.log(expense)
        // setexpenses((prvexpensedata)=>{
        //     return[expense, ...prvexpensedata]
        // })
        setexpenses([...ctx.expense, expense])
    }
    function editHandler(){
        
    }
    function deleteHandler(){
    }
    const ctx={
        expense:addedexpenses,
        addexpense:addexpensehandler,
        editexpenses:editHandler,
        deleteexpenses:deleteHandler
    }

    return(
        <ExpenseContext.Provider value={ctx}>{props.children}</ExpenseContext.Provider>
    )
}

export default ExpenseContext