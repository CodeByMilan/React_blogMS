import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Layout from "../components/layout/Layout";
import axios from "axios";
import { baseUrl } from "../Config";

const SingleBolg = () => {
  const {id} =useParams()
  const navigate=useNavigate()
  const [blog, setBlog] = useState({});
  const fetchBlog = async () => {
    const response = await axios.get(`${baseUrl}/blog/${id}`);
    if (response.status == 200) {
      setBlog(response.data.data);
    }
  };
  useEffect(() => {
    fetchBlog();
  }, []);
  
    const deleteBlog = async () => {
      try{
      const response = await axios.delete(`${baseUrl}/blog/${id}`,{
        headers: {
          'Authorization':localStorage.getItem('token')
          }
      });
      if (response.status == 200) {
      navigate("/")
      }else{
        alert("Something went wrong .try again")
      }
    
  }catch(error){
    alert(error?.response?.data?.message)
  }
}
  
  return (
    <>
      <Layout>
      <div
  className="flex flex-col rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white md:flex-row w-screen h-screen p-8 md:p-12 space-x-4">
  <img
    className="h-[80%] w-2/5 rounded-t-lg object-cover md:!rounded-none md:!rounded-s-lg"
    src={blog?.imageUrl}
    alt="Card image" />
  <div className="flex flex-col justify-start p-3 pt-0 w-3/5">
    <h5 className="mb-2 text-5xl font-bold">{blog?.title}</h5>
    <p className="mb-4 text-lg">{blog?.subtitle}</p>
    < p className="mb-4 text-lg">{blog?.category}
    </p>
    < p className="text-sm text-surface/75 dark:text-neutral-300">
     {blog?.description}
    </p>
    <p className="text-sm pt-5 mt-2 text-surface/75 font-medium font-serif text-xl dark:text-neutral-300">
      Author: {blog?.userId?.username}
    </p>
    <div className="flex  mt-4">
      <Link to={`/blog/edit/${id}`}>
        <button className="bg-black text-white px-10 py-3 mx-5 rounded-md focus:outline-none">Edit</button>
      </Link>
    
        <button className="bg-black text-white px-10 py-3 mx-5 rounded-md focus:outline-none" onClick={deleteBlog}>Delete</button>
    
    </div>
  </div>
</div>

      </Layout>
    </>
  );
};

export default SingleBolg;
