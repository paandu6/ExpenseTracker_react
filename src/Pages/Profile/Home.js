import { useHistory } from "react-router-dom";
import classes from "./Profile.module.css";
import NewExpense from "../Expenses/NewExpense";
import { authactions } from "../../Storage/authredux";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
function Home() {
  const totalamount=useSelector(state=>state.expense.totalamount)
  let [theme,setTheme]=useState('lightTheme')
  const data=useSelector(state=>state.expense.expensedata)
  function changeTheme(){
    if(theme ==='lightTheme'){
      setTheme('darkTheme')
    }else{
      setTheme('lightTheme')
    }
  }


useEffect(()=>{
  document.body.className=theme
},[theme])

  

  const dispatch=useDispatch()
  const histroy = useHistory();
  function profile() {
    histroy.replace("/updateprofile");
  }
  const id = localStorage.getItem("token");
  function verifymail(event) {
    event.preventDefault();
    fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyDj_DUYhAYTNv7e1D6pd-blzYx8DlGkTDU",
        {
        method: "POST",
        body: JSON.stringify({
        requestType: "VERIFY_EMAIL",
        idToken: id,
        }),
        headers: {
        "Content-Type": "application/json",
        },
      }
    ).then((res) => console.log(res));
  }
  function Logout(){
  dispatch(authactions.logout())
  histroy.replace('/auth')
  }
  function csvdownload(data){
    return data.map(data =>data.join(',')).join("\n")
  }
  const blob=new Blob([csvdownload(data)])
  const url=URL.createObjectURL(blob)

  

  return (
    <div>
    <div className={classes.profile}>
      <div>
        <h1>Welcome To Expense Tracker</h1>
        <h3>Track your expenses in a easy way</h3>
        <a href={url} download='file.csv'>Download expenses</a>
      </div>
      <div>
        <p >Your Profile is InComplete....</p>
        <button onClick={profile}>Complete profiles</button>
        <button onClick={verifymail}>Verify Mail</button>
        <button onClick={Logout}>Logout</button>
        {totalamount >10000 &&
        <button >Premium</button>}

        <button onClick={changeTheme}>Change Theme</button>
      </div>
    </div>
    <NewExpense />
      </div>
  );
}
export default Home;
