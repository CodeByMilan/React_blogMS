import React from 'react'
import { Navbar } from '../../components/Navbar'
import Form from './components/Form'


const AddBlog = () => {
  return (
 <>
 <Navbar/>
 <Form title="New Blog" btnName="Create"/>
 </>
  )
}

export default AddBlog