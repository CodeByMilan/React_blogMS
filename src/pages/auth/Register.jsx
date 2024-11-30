import React from "react";
import Form from "./components/Form";
import { Navbar } from "../../components/navbar/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate()
  const handleRegister= async()=>{
  try{
    const response = await axios.post("baseurl/api/users/register",data)
    if (response.status==201){
      navigate("/login")
    }
    else{
      alert("Registration failed")
    }
  }catch(error){
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
