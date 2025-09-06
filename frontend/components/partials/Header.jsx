import { Link } from "react-router-dom"
const Header = () => {
  return (
      <header>
          
      <Link to="/">
        <h1>Codnify.com</h1>
      </Link>

      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>

        <div>
            <Link to="/login">
            <button>Login</button>
            </Link>
            <Link to="/register">
            <button>Sign Up</button>
            </Link>
        </div>
          
    </header>
  );
}

export default Header
