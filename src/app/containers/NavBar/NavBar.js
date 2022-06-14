import React, { useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';

/* ------------- || Styles Imports || ------------- */
import '../../styles/sidebar.css';

/* ------------- || Providers Imports || ------------- */
import useAuth from '../../providers/AuthenticationProvider';

const NavBar = () => {
    const { isAuth, logout } = useAuth();
    const navigate = useNavigate();
  
    const handleLogout = () => {
      logout();
      navigate("/");
    };
  
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/home">My Home</Link>
          </li>
          <li>
            <Link to="/scenario">My Scenario</Link>
          </li>
          <li>
            <Link to="/monitoring">Monitoring</Link>
          </li>
          <li>
            <Link to="/model">My Model</Link>
          </li>
        </ul>
        {isAuth && (
          <button onClick={handleLogout}>
            Logout
          </button>
        )}
      </nav>
    );
};

export default NavBar;
