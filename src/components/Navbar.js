import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
      <nav>
          <Link to="/">
            <h1>Logo</h1>
          </Link>
          <ul className="nav-Links">
              <Link to="/about">
                <li>About</li>
              </Link>
              <li>Contact</li>
          </ul>
      </nav>
  );
}

export default Navbar;
