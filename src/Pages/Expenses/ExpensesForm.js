import { useContext, useRef } from "react"
import classes from './Expenses.module.css'
import ExpenseContext from "../../Storage/expenseContext"
function ExpensesForm(props){
    const amountinput=useRef()
    const descriptioninput=useRef()
    const categoryinput=useRef()
    const ctx =useContext(ExpenseContext)
    function formHandler(event){
    event.preventDefault()
        const enteredamount=amountinput.current.value
        const entereddescription=descriptioninput.current.value
        const enteredcategory=categoryinput.current.value
        const data=[{
            amount:enteredamount,
            description:entereddescription,
            category:enteredcategory
        }]
        ctx.addexpense(data)

        // fetch('https://expensetracker-16802-default-rtdb.firebaseio.com/expenses.json',{
        //     method:'POST',
        //     body:JSON.stringify(data),
        //     headers:{
        //         'Content-Type':'application/json'
        //     }
        // }).then(res=>console.log(res))
    }
    return(
        <div className={classes.card}>
            <div className={classes.form}>
            <form onSubmit={formHandler} className={classes.expenseform}>
                <input type='text' ref={amountinput} placeholder='Entere amount' />
                <input type='text' ref={descriptioninput} placeholder='Eneter description' />
                <select id="cars" name="cars" ref={categoryinput} >
                <option value="movies">Movie</option>
                <option value="trip">Trip</option>
                <option value="food">Food</option>
                <option value="investment">Investment</option>
                </select>
                <button>ADD</button>
            </form>
            </div>
        </div>
    )
}
export default ExpensesForm