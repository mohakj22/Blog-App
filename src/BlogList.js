const BlogList = (props) => {
  const blogs = props.blogs;
  return (
    <div className="blog-list">
      <h1>{props.title}</h1>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>{`written by : ${blog.author}`}</p>
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
