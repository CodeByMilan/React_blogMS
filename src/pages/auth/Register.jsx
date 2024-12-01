import React from "react";
import Form from "./components/Form";
import { Navbar } from "../../components/navbar/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../../Config";

const Register = () => {
  const navigate = useNavigate()
  const handleRegister= async(data)=>{
  try{
    const response = await axios.post(`${baseUrl}/register`,data)
    if (response.status==201){
      navigate("/login")
    }
    else{
      alert("Registration failed")
    }
  }catch(error){
    console.log(error)
    alert(error?.response?.data?.message)
  }

  }
  return (
 <>
 <Navbar/>
 <Form type="Register" onSubmit={handleRegister}/>
 </>
  );
};

export default Register;
