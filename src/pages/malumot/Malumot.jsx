import '../malumot/Malumot.css'
import { json, Link } from 'react-router-dom'
import { Kontext } from '../../Kontext'
import { useContext, useState } from 'react'

export const Malumot =()=>{
    const  {data,setData,send,deleteUser,user,setUser,mot,setMot}=useContext(Kontext)
    
    return(
        <div className='malumot'>
            <div className="navbar">
              <p>Users CRUD</p>
              <Link to="/"><button>Add</button></Link>
            </div>
            <input type="text" name="" id="" onChange={(e)=> setMot(e.target.value.toLocaleLowerCase().trim())} />
             <table>
             <thead>
                <tr>
                    <th>#</th>
                    <th>F.I.O</th>
                    <th>Email</th>
                    <th>Login</th>
                    <th>Password</th>
                    <th>Actiation</th>
                </tr>
            </thead>
            <tbody>
               {
                mot.length>0 ? data.filter((item)=> (item.name.toLocaleLowerCase().trim().indexOf(mot) != -1)).length>0 ?
                data.filter((item)=> (item.name.toLocaleLowerCase().trim().indexOf(mot) != -1))
                .map((item,index)=>{ 
                    return(
                        <tr key={index}>
                            <th>{index+1}</th>
                            <th>{item.name}</th>
                            <th>{item.email}</th>
                            <th>{item.login}</th>
                            <th>{item.password}</th>
                            <th>
                                <button onClick={()=>deleteUser(item.id)}>delete</button>
                                <button onClick={()=>setUser(item)} >add</button>
                            </th>
                        </tr>
                    )
                    }) 
                    : 
                    <h1>NO found</h1> 
                    :  
                    data?.map((item,index)=>{
                       return(
                        <tr key={index}>
                            <th>{index+1}</th>
                            <th>{item.name}</th>
                            <th>{item.login}</th>
                            <th>{item.login}</th>
                            <th>{item.password}</th>
                            <th>
                                <button onClick={()=>deleteUser(item.id)}>delete</button>
                                <button onClick={()=>setUser(item)} >add</button>
                            </th>
                        </tr>
                       )
                       })
               } 
            </tbody>
             </table>
        </div>
    )
}