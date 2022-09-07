import { useState, useRef, useContext } from "react";
import { useHistory } from 'react-router-dom';
import classes from '../Auth/Auth.module.css'
import AuthContext from "../../Storage/authContext";
import { authactions } from "../../Storage/authredux";
import { useDispatch } from "react-redux";


function Login(){
  const dispatch =useDispatch()
    const [isLogin, setIsLogin] = useState(true);
    const eneteredmail=useRef()
    const eneteredpassword=useRef()
    const eneteredcpassword=useRef()
    const histroy =useHistory()
    const ctx=useContext(AuthContext)

    const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  }
  function formHandler(event){
    event.preventDefault();
    if(isLogin){
        const email=eneteredmail.current.value
        const password=eneteredpassword.current.value
        if(!email.includes('@')){
            alert('eneter valid email address')
        }
        if(password.trim().length <6){
            alert('enter valid password')
        }
        fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDj_DUYhAYTNv7e1D6pd-blzYx8DlGkTDU',{
        method:'POST',
        body:JSON.stringify({
            email:email,
            password:password,
            returnSecureToken:true
        }),
        headers:{
            'Content-Type':'application/json'
          }
    }).then(res=>{
        if(res.ok){
            res.json().then(data=>{
            dispatch(authactions.login(data.idToken))
            histroy.replace('/home')
          })
        }else{
          return res.json().then(data =>{
            let errormessage='please check your mail or password'
              if(data && data.error && data.error.message){
                errormessage=data.error.message
              } 
              alert(errormessage)
          })
        }
      })
      }else{
        const    email=eneteredmail.current.value
        const    password=eneteredpassword.current.value
         const   cpassword=eneteredcpassword.current.value

            if(!email.includes('@')){
                alert('eneter valid email address')
            }
            if(password.trim().length < 6 || cpassword.trim().length <6){
                alert('enter valid password')
            }
            if(password !== cpassword){
                alert('Please check password and confirm password');
            }
          

           fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDj_DUYhAYTNv7e1D6pd-blzYx8DlGkTDU',{
                method:'POST',
                body:JSON.stringify({
                    email:email,
                    password:password,
                    cpassword:cpassword,
                    returnSecureToken:true
                }),
                headers:{
                    'Content-Type':'application/json'
                }
            }).then(res=>{
              if(res.ok){
                res.json().then(data=>{
                  histroy.replace('/home')
                })
              }else{
                return res.json().then(data =>{
                  let errormessage='please check your mail or password'
                    if(data && data.error && data.error.message){
                      errormessage=data.error.message
                    } 
                    alert(errormessage)
                })
              }
            })
      }
  }
  
    function forgot(){
      histroy.replace('/ForgotPassword')
    }


    return(
        <section className={classes.card}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={formHandler} className={classes.form}>
        <div className={classes.details}>
          <label htmlFor='email'>Your Email :</label>
          <input type='email' id='email' required ref={eneteredmail}  />
        </div>
        <div className={classes.details}>
          <label htmlFor='password'>Enter Password :</label>
          <input type='password' id='password'  ref={eneteredpassword} required />
        </div>

        {!isLogin && <div className={classes.details}>
          <label htmlFor='cpassword'>Confirm Password :</label>
          <input type='password' id='cpassword' ref={eneteredcpassword} required />
        </div>}
        
        <p  className={classes.forgot} onClick={forgot}>Forgot Password ? Click To Reset</p>
        
        <div className={classes.buttons}>
          <button className={classes.login}>{isLogin ? 'Login' : 'Create Account'}</button>
          <button className={classes.login}
            type='button'
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
    )
}

export default Login