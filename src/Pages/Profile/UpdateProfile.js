import { useEffect, useRef } from "react"
import classes from './Profile.module.css'
function UpdateProfile(){
    const nameinputref=useRef()
    const imageinputref=useRef()
    const id=localStorage.getItem('token')
    useEffect(onLoad,[])
    function onLoad(){
        fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDj_DUYhAYTNv7e1D6pd-blzYx8DlGkTDU',{
            method:'POST',
            body:JSON.stringify({
                idToken:id
            }),
            headers:{
                "Content-Type": "application/json" 
            }
        }).then((res)=>{
            console.log(res)
        })
    }


    function formHandler(event){
        event.preventDefault()
        const name=nameinputref.current.value
        const img=imageinputref.current.value
        fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDj_DUYhAYTNv7e1D6pd-blzYx8DlGkTDU',
        {
            method:'POST',
            body:JSON.stringify(
                {
                    idToken:id,
                    displayName:name,
                    photoUrl:img,
                    deleteAttribute:"PHOTO_URL",
                    returnSecureToken:false
                }
            ),
            headers:{
                "Content-Type": "application/json" 
            }
        }).then(res=>console.log(res))
    }
    return(
        <div className={classes.updateprofile}>
        <form onSubmit={formHandler}>
            <h1>Update your profile & start usisng tracker</h1>
            <div className={classes.updatedetails}>
            <div >
            <label>fullname</label>
            <input type='text' req  ref={nameinputref}></input>
            </div>
            <div>
            <label>upload your image</label>
            <input type='file' accept='image/*' ref={imageinputref} />
            </div>
            </div>
            <button>Update</button>
        </form>
        </div>
    )
}
export default UpdateProfile