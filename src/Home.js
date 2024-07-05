import { useState, useEffect } from "react";
import BlogList from "./BlogList";
const Home = () => {
  const [message, setMessage] = useState("Loading......");
  const [blogs, setBlogs] = useState(null);
  const [isPending, setPending] = useState(true);
  const hadndleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
    console.log(blogs);
  };
  useEffect(() => {
    const blogList = async () => {
      try {
        let response = await fetch("http://localhost:8000/blogs");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        let data = await response.json();
        setBlogs(data);
        console.log(data);
        setPending(false);
      } catch (err) {
        console.error("Fetch error:", err);
        // setPending(false);
        setMessage(
          "We're very sorry, but there was an error fetching the data. We sincerely apologize for any inconvenience this may have caused."
        );
      }
    };
    blogList();
  }, []);
  return (
    <div className="home">
      {isPending && <div>{ message }</div>}
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
