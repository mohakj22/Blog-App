import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
const BlogDetail = () => {
    const { id } = useParams();
    console.log(id);
    const { data: blog, isPending, message } = useFetch("http://localhost:8000/blogs/" + id);
    console.log("Blog detail ",blog);
  return (
    <div className="blog-details">
          {isPending && <div>{message}</div>}
          {blog && <article>
              <h2>{blog.title}</h2>
              <p>Credits : {blog.author}</p>
              <div>{blog.body}</div>
          </article>}
    </div>
  );
};

export default BlogDetail;
