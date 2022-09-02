import { useRef } from "react";

function Signup(){
    const eneteredmail=useRef()
    const eneteredpassword=useRef()
    const eneteredcpassword=useRef()


     function formHandler(event){

        const    email=eneteredmail.current.value
        const    password=eneteredpassword.current.value
         const   cpassword=eneteredcpassword.current.value
         console.log(typeof password)
            if(!email.includes('@')){
                alert('eneter valid email address')
            }
            if(password.trim().length < 6 || cpassword.trim().length <6){
                alert('enter valid password')
            }
            if(password !== cpassword){
                alert('Please check password and confirm password');
            }
          
        event.preventDefault();
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
                if(!res.ok){
                    alert('error')
                }
            })
            
    }
    return(
        <section>
            <form onSubmit={formHandler}>
                <label>Email Id</label>
                <input type='text' ref={eneteredmail} />
                <label>Password</label>
                <input type='password' ref={eneteredpassword} />
                <label>Confirm Password</label>
                <input type='password' ref={eneteredcpassword} />
                <button>Signup</button>
            </form>
            <button >Already Having Account ? Login Now !</button>
        </section>
    )
}
export default Signup