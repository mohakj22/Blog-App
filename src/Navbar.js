const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Welcome to "Man Ki Baat"</h1>
      <div className="links">
        <a href="/">Home</a>
        <a href="/create" className="new-blog-link">
          New Blog
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
