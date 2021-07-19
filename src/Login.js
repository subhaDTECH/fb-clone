import React from 'react';
import "./Login.css";
import {auth,provider} from "./firebase";
import {actionTypes} from "./reducer";
import {useStateValue} from "./StateProvider";
const Login = () => {
    const [state,dispatch]=useStateValue();
    const Loginhandel=()=>{
        auth.signInWithPopup(provider)
        .then((result)=>{
            console.log(result)
            dispatch({
                type:actionTypes.SET_USER,
                user:result.user,
            })

        }).catch((e)=>alert(e.message))
        
    }
    return (
        <div className="Login">
             <img src="https://tse3.mm.bing.net/th?id=OIP.FQYyu80e7eHzc3lbL4BzBQHaHY&pid=Api&P=0&w=167&h=167" alt="" />
          
            <button className="login_btn" onClick={Loginhandel} type="submit">SignIn</button>
            

        </div>
    )
}

export default Login;
