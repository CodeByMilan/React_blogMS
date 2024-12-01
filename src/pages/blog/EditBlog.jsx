import React from 'react'
import Layout from '../../components/layout/Layout'
import Form from './components/Form'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { baseUrl } from '../../Config'

const EditBlog = () => {
    const {id}=useParams()
    const navigate = useNavigate()
    const handleEditBlog=async(data)=>{
        try{
         const response = await axios.patch(`${baseUrl}/blog/${id}`,data,{
           headers: {
             'Content-Type': 'multipart/form-data',
             Authorization:localStorage.getItem("token")
             }
         })
         if(response.status==200){
           alert("Blog updated successfully")
           navigate("/")
         }
         else{
           alert("Failed to update blog")
         }
        }
        catch(error){
         console.log(error)
         alert(error?.response?.data?.message)
        }
     
       }

  return (
    <Layout>
    <Form title="Edit Blog" btnName="Edit" onSubmit={handleEditBlog}/>
    </Layout>
  )
}

export default EditBlog