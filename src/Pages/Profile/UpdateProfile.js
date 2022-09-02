import { useRef } from "react"

function UpdateProfile(){
    const nameinputref=useRef()
    const imageinputref=useRef()

    function formHandler(event){
        event.preventDefault()
        const name=nameinputref.current.value
        const img=imageinputref.current.value
        const id=localStorage.getItem('token')
        fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDj_DUYhAYTNv7e1D6pd-blzYx8DlGkTDU',
        {
            method:'POST',
            body:JSON.stringify(
                {
                    idToken:id,
                    displayName:name,
                    photoUrl:img,
                    deleteAttribute:"PHOTO_URL",
                    returnSecureToken:true}
            ),
            headers:{
                "Content-Type": "application/json" 
            }
        }).then(res=>console.log(res))
    }
    return(
        <form onSubmit={formHandler}>
            <label>fullname</label>
            <input type='text' req  ref={nameinputref}></input>
            <label>upload your image</label>
            <input type='file' accepr='image/*' ref={imageinputref} />
            <button>Update</button>
        </form>
    )
}
export default UpdateProfile