import { useState, useRef } from "react";
import { useHistory } from 'react-router-dom';
function Auth(){
    const [isLogin, setIsLogin] = useState(true);
    const [isLoading,setIsLoading]=useState(false)
    const eneteredmail=useRef()
    const eneteredpassword=useRef()
    const eneteredcpassword=useRef()
    const histroy =useHistory()


    const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  }
  function formHandler(event){
    event.preventDefault()
    if(isLogin){
        const email=eneteredmail.current.value
        const password=eneteredpassword.current.value
        if(!email.includes('@')){
            alert('eneter valid email address')
        }
        if(password.trim().length <6){
            alert('enter valid password')
        }
        event.preventDefault()
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
            histroy.replace('/home')
            localStorage.setItem('token',data.idToken)
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
            }).then((res)=>{
                res.json().then((data)=>{
                    if(!data.ok){
                        alert(data.error.message)
                    }
                })
            })
      }
  }
  

    return(
        <section >
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={formHandler}>
        <div >
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required ref={eneteredmail}  />
        </div>
        <div >
          <label htmlFor='password'>Your Password</label>
          <input type='password' id='password'  ref={eneteredpassword} required />
        </div>

        {!isLogin && <div >
          <label htmlFor='cpassword'>Your Password</label>
          <input type='password' id='cpassword' ref={eneteredcpassword} required />
        </div>}
    
      
        <div>
          <button>{isLogin ? 'Login' : 'Create Account'}</button>
          <button
            type='button'
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        {isLoading && <p>please wait signing up!</p>}
        </div>
      </form>
    </section>
    )
}

export default Auth