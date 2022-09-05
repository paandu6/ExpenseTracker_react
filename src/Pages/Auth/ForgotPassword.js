import { useRef } from "react"
import classes from './Auth.module.css'
function ForgotPassword(){
    const emailinput=useRef()

    function resetpassword(event){
    event.preventDefault();
    const eneteredmail=emailinput.current.value
        fetch('https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyDj_DUYhAYTNv7e1D6pd-blzYx8DlGkTDU',{
            method:'POST',
            body:JSON.stringify({
                requestType:"PASSWORD_RESET",
                email:eneteredmail
            }),
            headers:{
                'Content-Type':'application/json'
            }
        })
    }
    return(
        <div className={classes.card}>
        <h1>Entere your mail id</h1>
        <form onSubmit={resetpassword}>
        <div className={classes.passworddetails}>
        <label>Eneter Your Mail</label>
        <input type='text' ref={emailinput}/>
        </div>
        </form>
        <button className={classes.forgotbtn}>Reset Password</button>
        </div>
    )
}

export default ForgotPassword