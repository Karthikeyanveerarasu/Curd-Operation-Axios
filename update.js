import react, { useEffect, useState } from 'react';
import {Api_Url} from '../constant/Url'
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import { FloatingLabel } from "react-bootstrap";
import { Form } from "react-bootstrap";
export default function Update(){
  const [name, SetName] = useState("");
    const[psw,SetPsw]=useState("");
    const[id,SetId]=useState("");
    const navigate=useNavigate();
    useEffect(()=>{
      SetId(localStorage.getItem('id'));
      SetName(localStorage.getItem('name'));
      SetPsw(localStorage.getItem('psw'));
    },[])
    const updateuser= async()=>{
await axios.put(Api_Url+'/'+id,{
    name,
    psw
})
navigate('/read')
    }
  const UpdateNameValue = (e) => {
    SetName(e.target.value);
  };
 const UpdatepswValue=(e)=>{
   SetPsw(e.target.value);
 }
  return(
    <>
    <FloatingLabel controlId="floatingName" label="Name">
              <Form.Control
                type="Name"
                placeholder="name"
                value={name}
                onChange={UpdateNameValue}
                required
              />
            </FloatingLabel>
           <div className="my-3"><FloatingLabel controlId="floatingName" label="password">
              <Form.Control
                type="password"
                placeholder="password"
                
                value={psw}
                onChange={UpdatepswValue}
                required
              />
            </FloatingLabel></div>
            
            <div className="text-center mt-5">
              <button class="btn btn-success" onClick={updateuser}>
               Update
              </button>
            </div>
    </>
  )
}
