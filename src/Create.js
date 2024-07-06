import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState();
  const handleSubmit = (e) => {
      e.preventDefault();
      console.log(e);
      const blog = { title, body, author };
      
  };
  return (
    <div className="create">
      <h2>Add a new Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input
          placeholder="Enter the title for the blog"
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog's body:</label>
        <textarea
          placeholder="Enter the content of your blog"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        ></textarea>
        <label>Author's name:</label>
        <textarea
          placeholder="Enter author's name"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        ></textarea>
        <button>Add Blog</button>
      </form>
      {/* <p>{title} {body} {author}</p> */}
    </div>
  );
};

export default Create;
