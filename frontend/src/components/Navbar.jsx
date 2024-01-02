import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <div className="container">
        <Link to="/">
          <h2>WorkOut App</h2>
        </Link>
        <nav>
          <div>
            <button>LogOut</button>
          </div>
          <div>
            <Link to="/login">LogIn</Link>
            <Link to="/signup">SignUp</Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
