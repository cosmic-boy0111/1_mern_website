import React,{useEffect,useState,useContext} from 'react'
import {UserContext} from '../App'

const Home = () => {

    const {state,dispatch} = useContext(UserContext)


    const [userName, setUserName] = useState('');
    

    const userHome = async () => {
        try {
          const res = await fetch("/getdata", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });
    
          const data = await res.json();
          setUserName(data.name);
          console.log(data);
          dispatch({type:'USER',payload:true})
    
          if (res.status !== 200) {
            const error = new Error(res.error);
            throw error;
          }
        } catch (error) {
          console.log(error);
        }
      };
    
      useEffect(() => {
        userHome();
      }, []);

    return (
        <>
            <div className='d1'>
                <div className='purple'>
                    
                </div>
                <div className='white'>
                    
                </div>
            </div>
            <div className="home_page">
                <div className="home_div">
                    <p className='pt-5 wel'>WELCOME</p>
                    <h1 style={{
                        textTransform:'capitalize'
                    }}>{userName}</h1>
                    <h1 style={{
                        // fontWeight:userName===''?'bold':'normal',
                        fontSize:userName===''?'40px':'20px',
                    }}>{ userName===''?'We Are The MERN Developer':'Happy, to see you back'}</h1>
                </div>
            </div>
        </>
    )
}

export default Home
