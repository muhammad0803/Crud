import '../input/Input.css'
import { Link } from 'react-router-dom'
import { Kontext } from '../../Kontext'
import { useContext, useState } from 'react'
import { useNavigate } from "react-router-dom";
export const Input=()=>{
    const path = useNavigate();
    const {user,setUser,data,setData,send,imya,setImya}=useContext(Kontext)
    const [li,setLi]=useState(data.id)
    console.log(li);
    localStorage.setItem("data1",JSON.stringify(data));
    const change=(e)=>{
        setUser(
            {
                ...user,
                [e.target.name]:e.target.value,
            }
        )
    };
    return(
        <div className="input">
        <div className="navbar">
              <p>Users Edit</p>
              <Link to="/malumot"><button>Cancel</button></Link>
        </div>
        <form onSubmit={(e)=>{send(e) 
             path('/malumot')}}>

            <div className="input1">
               <p>F.I.O</p>
               <input type="text" name='name' placeholder='name' value={user.name} onChange={change} />
            </div>

            <div className="input1">
               <p>Email</p>
               <input type="email" name='email' placeholder='email' value={user.email} onChange={change} />
            </div> 

            <div className="input1">
               <p>Login</p>
               <input type="text" name='login' placeholder='login'  value={user.login} onChange={change} />
            </div>

             <div
              className="input1">
               <p>Password</p>
               <input type="text" name='password' placeholder="password" value={user.password} onChange={change} />
            </div>
            <button >send</button>
            
        </form>
        </div>
    )
}