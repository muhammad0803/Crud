import React from "react"
import { useState } from "react"
import Swal from "sweetalert2"
export const Kontext =React.createContext()
 const KontextPrivoder=({children})=>{
    const[mot,setMot]=useState("")
    const [data,setData]=useState([])
    const [user,setUser]=useState(
        { 
            id:false,
            name:"",
            email:"",
            login:"",
            password:"",
        }
    );
    const send = (e) => {
        e.preventDefault();
        if(user.id){
            setData(data=>data.map((item)=>item.id===user.id? user : item))
        }else{
            setData([
              ...data,
              {
                ...user,
                id: new Date().getTime(),
              },
            ]);
        }
        setUser({
            name: "",
            email: "",
            login:"",
            password: "",
          });
    };

    const deleteUser = (id) => {
        Swal.fire({
            title: 'Do you want delete?',
            showDenyButton: true,
            // showCancelButton: true,
            confirmButtonText: 'delete',
            denyButtonText: `Don't delete`,
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                setData(data.filter((item) => item.id !== id));
              Swal.fire('Deled!', '', 'success')
            } else if (result.isDenied) {
                setData(data)
              Swal.fire('Changes are not Daled', '', 'info')
            }
          })
            // setData(data.filter((item) => item.id !== id));
    };
    return(
        <Kontext.Provider value={{  user,setUser,data,setData,send,deleteUser,mot,setMot}}>
           {children}
        </Kontext.Provider>
    )
}
export default KontextPrivoder;
