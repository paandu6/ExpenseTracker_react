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
function ExpenseList(){
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
    //             ctx.addexpense(data)
    //         })
    //     })
    // }


// function edit(){
//     fetch('url/id')
// }

console.log(ctx.expense)

    return(
        <div className={classes.expenselist}>
        <h2>Your Expenses</h2>
        <ul className={classes.itemslist}>
            {ctx.expense.map((item)=>(
        <li>{item.amount} {item.description}{item.category}
        <button >edit</button>
        <button>delete</button>
    </li>))}
        </ul>
        </div>
    )
}
export default ExpenseList