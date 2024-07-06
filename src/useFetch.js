import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [message, setMessage] = useState("Loading......");
  const [data, setData] = useState(null);
  const [isPending, setPending] = useState(true);
  useEffect(() => {
    const abortCont = new AbortController();
    const blogList = async () => {
      setTimeout(async () => {
        try {
          let response = await fetch(url, {signal: abortCont.signal});
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          let data = await response.json();
          console.log(data);
          setData(data);
          console.log(data);
          setPending(false);
        } catch (err) {
          console.error("Fetch error:", err);
          setMessage(
            "We're very sorry, but there was an error fetching the data. We sincerely apologize for any inconvenience this may have caused."
          );
        }
      }, 1000);
      return () => abortCont.abort();
    };
    blogList();
  }, [url]);
  const hadndleDelete = (id) => {
    const newBlogs = data.filter((blog) => blog.id !== id);
    setData(newBlogs);
    console.log(data);
  };
  return { data, isPending, message, hadndleDelete };
};
export default useFetch;
