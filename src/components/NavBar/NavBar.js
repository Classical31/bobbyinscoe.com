import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="NavBar">
      <h3>Bobby Inscoe</h3>
      <div className="links">
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="https://github.com/Classical31/bobbyinscoe">GitHub</a>
        <a href="/">Duck Game</a>
      </div>
    </nav>
  );
};

export default NavBar;
