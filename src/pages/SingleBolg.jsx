import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/layout/Layout";

const SingleBolg = () => {
  return (
    <>
      <Layout>
      <div
  className="flex flex-col rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white md:flex-row w-screen h-screen p-8 md:p-12 space-x-4">
  <img
    className="h-[80%] w-2/5 rounded-t-lg object-cover md:!rounded-none md:!rounded-s-lg"
    src="https://tecdn.b-cdn.net/wp-content/uploads/2020/06/vertical.jpg"
    alt="Card image" />
  <div className="flex flex-col justify-start p-3 pt-0 w-3/5">
    <h5 className="mb-2 text-5xl font-bold">Blog Title</h5>
    <p className="mb-4 text-lg">Category</p>
    <p className="mb-4 text-lg">
      This is a wider card with supporting text below as a natural lead-in
      to additional content. This content is a little bit longer.
    </p>
    <p className="text-sm text-surface/75 dark:text-neutral-300">
      Published on 2022-01-01
    </p>
    <p className="text-sm pt-5 mt-2 text-surface/75 font-medium font-serif text-xl dark:text-neutral-300">
      By Milan Acharya
    </p>
    <div className="flex  mt-4">
      <Link to="/blog/edit">
        <button className="bg-black text-white px-10 py-3 mx-5 rounded-md focus:outline-none">Edit</button>
      </Link>
      <Link to="/blog/delete">
        <button className="bg-black text-white px-10 py-3 mx-5 rounded-md focus:outline-none">Delete</button>
      </Link>
    </div>
  </div>
</div>

      </Layout>
    </>
  );
};

export default SingleBolg;
