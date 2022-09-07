import { useContext, useEffect } from "react"
import { useSelector } from "react-redux"
import ExpenseContext from "../../Storage/expenseContext"
import classes from './Expenses.module.css'

function ExpenseList(props){
   const expensedata=useSelector(state=>state.expense.expensedata)

    // useEffect(onLoad,[])

    // function onLoad(){
    //     fetch('https://expensetracker-16802-default-rtdb.firebaseio.com/expenses.json',{
    //         method:'GET',
    //         headers:{
    //             'Content-Type':'application/json'
    //         }
    //     }).then(res=>{
    //         res.json().then(data=>{
    //             console.log(data)
    //             for (let key in data) {
    //                 ctx.addexpense(data[key])
    //                 console.log(data[key])
    //                 }
    //         })
    //     })
    // }



  

function deletehandler(){
    fetch('https://expensetracker-16802-default-rtdb.firebaseio.com/expenses/-NBCf3e0n9dUicuXwMXj.json',{
        method:'DELETE',
        headers:{
            'Content-Type':'application/json'
        }
    }).then(res=>{
        if(res.ok){
            console.log('deleted succedfully')
        }
    })
}

    return(
        <div className={classes.expenselist}>
        <h2>Your Expenses</h2>
        <ul>
            {expensedata.map((item)=>(
            <li>{item.amount} {item.description}{item.category}
            <button>edit</button>
            <button>delete</button>
            </li>
            ))}
        </ul>
        </div>
    )
}
export default ExpenseList