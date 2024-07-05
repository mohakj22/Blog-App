import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";
const Home = () => {
  const {
    data: blogs,
    isPending,
    message,
    hadndleDelete
  } = useFetch("http://localhost:8000/blogs");
  

  return (
    <div className="home">
      {isPending && <div>{message}</div>}
      {blogs && (
        <BlogList
          blogs={blogs}
          title="All Blogs"
          hadndleDelete={hadndleDelete}
        />
      )}
    </div>
  );
};

export default Home;
