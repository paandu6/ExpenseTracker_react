import { useRef } from "react"

function Login(){
    const eneteredmail=useRef()
    const eneteredpassword=useRef()

    function formHandler(event){
        const    email=eneteredmail.current.value
        const    password=eneteredpassword.current.value
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
    }).then((res)=>{
        res.json().then((data)=>console.log(data))
    })
    }
    
    return(
        <section>
             <form onSubmit={formHandler}>
                <label>Email Id</label>
                <input type='text' ref={eneteredmail} />
                <label>Password</label>
                <input type='password' ref={eneteredpassword} />
                <button>Signup</button>
            </form>
        </section>
    )
}
export default Login