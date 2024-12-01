import React from 'react'
import Form from './components/Form'
import Layout from '../../components/layout/Layout'
import axios from 'axios'
import { baseUrl } from '../../Config'
import { useNavigate } from 'react-router-dom'


const AddBlog = () => {
  const navigate =useNavigate()
  const handleCreateBlog=async(data)=>{
   try{
    const response = await axios.post(`${baseUrl}/blog`,data,{
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization:localStorage.getItem("token")
        }
    })
    if(response.status==201){
      alert("Blog created successfully")
      navigate("/")
    }
    else{
      alert("Failed to create blog")
    }
   }
   catch(error){
    console.log(error)
    alert(error?.response?.data?.message)
   }

  }
  return (
 <>
 <Layout>
 <Form title="New Blog" btnName="Create" onSubmit={handleCreateBlog}/>
 </Layout>
 </>
  )
}

export default AddBlog