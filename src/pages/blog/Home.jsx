import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import Card from "./components/Card";
import { baseUrl } from "../../Config";
import axios from "axios";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const fetchBlogs = async () => {
    const response = await axios.get(`${baseUrl}/blog`);
    // console.log(response);
    if (response.status == 200) {
      setBlogs(response.data.data);
    }
  };
  useEffect(() => {
    fetchBlogs();
  }, []);
  return (
    <>
      <Layout>
        <div className="flex flex-wrap space-between gap-10 items-center justify-center m-auto p-auto">
          {blogs.length > 0 &&
            blogs.map((blog, index) => {
              return <Card blogs={blog} />;
            })}
        </div>
      </Layout>
    </>
  );
};

export default Home;
