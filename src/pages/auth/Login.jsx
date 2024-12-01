import React from "react";
import Form from "./components/Form";
import { Navbar } from "../../components/navbar/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../../Config";

const Login = () => {
  const navigate =useNavigate()
  const handleLogin=async (data)=>{
      try{
        const response = await axios.post(`${baseUrl}/login`,data)
        if (response.status==200){
          localStorage.setItem("token",response.data.token)
          navigate("/")
        }
        else{
          alert("Login failed")
        }
      }catch(error){
        alert(error?.response?.data?.message)
      }

  }
  return (
    <>
    <Navbar/>
      <Form type="Login" onSubmit={handleLogin}/>
    </>
  );
};

export default Login;
