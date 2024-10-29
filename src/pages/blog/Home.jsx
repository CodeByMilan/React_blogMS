import React from "react";
import Layout from "../../components/layout/Layout";
import Card from "./components/Card";

const Home = () => {
  return (
    <>
     <Layout />
     <div className="flex flex-wrap space-between gap-10 items-center justify-center">
     <Card/>
     <Card/>
     <Card/> 
     <Card/>

     </div>
    
    </>
     
     
    
  );
};

export default Home;
