import React,{useEffect,useContext} from 'react'
import { useHistory } from 'react-router-dom'
import { UserContext } from "../App";


const Logout = () => {

    const {state,dispatch} = useContext(UserContext)

    const history = useHistory();

    const logoutMe = async () => {
        try {
            const res = await fetch('/logout',{
                method:'GET',
                headers : {
                    'Content-Type' : 'application/json'
                }
            })
            dispatch({type:'USER',payload:false})
            const data = await res.json();
            console.log(data);
            history.push('/login')
            
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        logoutMe();
    },[])

    return (
        <>
            <h1>logout page</h1>
        </>
    )
}

export default Logout
