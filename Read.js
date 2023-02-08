import axios from 'axios';
import {Api_Url} from '../constant/Url'
import {useNavigate} from 'react-router-dom'
import { useEffect, useState } from 'react'
export default function Read(){
  const[data,SetData]=useState(null);

  const dataentry= async()=>{
    const res= await axios.get(Api_Url)
    SetData(res.data)
  }
  const navigate=useNavigate();
  const Delete = async(id)=>{
    await axios.delete(Api_Url +'/'+id);
    dataentry();
  }
  const Update=({name,psw,id})=>{
    localStorage.setItem('name',name);
    localStorage.setItem('id',id);
    localStorage.setItem('psw',psw);
navigate('/update');
  }
  useEffect(()=>{
    dataentry();
  },[])
  return(
    <>
<table class="table table-hover table-dark" style={{width:"70%"}}>
  <thead>
    <tr>
      <th scope="col">Username</th>
      <th scope="col">Password</th>
      <th scope="col">Update User</th>
      <th scope="col">Delete User</th>
     
    </tr>
  </thead>
  <tbody>
    
      { data&&
        data.map((data)=>{
          return(
            <>
            <tr key={data.id}>
             <th scope="row">{data.name}</th>
      <td>{data.psw}</td>
      <td> <button onClick={()=>Update(data)}>Change </button></td>
      <td> <button onClick={()=>Delete(data.id)}>Delete </button></td>

      </tr>
      </>
          )
        })
      }  
   
  </tbody>
</table>
    </>
  )
}
