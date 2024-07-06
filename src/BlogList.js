import { Link } from "react-router-dom";

const BlogList = (props) => {
  const blogs = props.blogs;
  return (
    <div className="blog-list">
      <h1>{props.title}</h1>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>{`written by : ${blog.author}`}</p>
          </Link>
          <button
            className="delete-button"
            onClick={() => {
              props.hadndleDelete && props.hadndleDelete(blog.id);
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
