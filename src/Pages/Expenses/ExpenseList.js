import { useContext, useEffect } from "react"
import ExpenseContext from "../../Storage/expenseContext"
import classes from './Expenses.module.css'
const data=[
    {amount:'100',
    title:'expense-1',
    description:'tour'},
    {amount:'200',
    title:'expense-2',
    description:"movie"}
]
function ExpenseList(props){
const ctx=useContext(ExpenseContext)    

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

    console.log(ctx.expense)


  

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
            {ctx.expense.map((item)=>(
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