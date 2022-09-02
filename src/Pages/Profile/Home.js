import {useHistory} from 'react-router-dom'
function Home(){
    const histroy=useHistory()
    function profile(){
        histroy.replace("/updateprofile")
    }
    return(
        <div>
        <h1>Your profile is incomplete complete it</h1>
        <button onClick={profile}>Complete profiles</button>
        </div>
     
    )
}
export default Home