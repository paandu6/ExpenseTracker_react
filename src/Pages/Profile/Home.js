import {  useContext } from "react";
import { useHistory } from "react-router-dom";
import classes from "./Profile.module.css";
import AuthContext from "../../Storage/authContext";
function Home() {
  const ctx=useContext(AuthContext)
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
    ctx.Logout()
  }
  return (
    <div className={classes.profile}>
      <div>
        <h1>Welcome To Expense Tracker</h1>
        <h3>Track your expenses in a easy way</h3>
      </div>
      <div>
        <p>Your Profile is InComplete....</p>
        <button onClick={profile}>Complete profiles</button>
        <button onClick={verifymail}>Verify Mail</button>
        <button onClick={Logout}>Logout</button>

      </div>
    </div>
  );
}
export default Home;
