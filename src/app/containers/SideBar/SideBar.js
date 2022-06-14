import React, { useRef } from "react";
import { useNavigate, Link } from "react-router-dom";

/* ------------- || Styles Imports || ------------- */
import "../../styles/sidebar.css";

/* ------------- || Providers Imports || ------------- */
import useAuth from "../../providers/AuthenticationProvider";

const SideBar = () => {
  const { isAuth, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return isAuth ? (
    <div className="sidebar open">
      <div className="logo-details">
        <i className="bx bx-bot icon" />
        <div className="logo_name">App Survey</div>
      </div>
      <ul className="nav-list">
        {isAuth && (
          <li style={{ marginTop: "auto", color: "white" }}>
            <button onClick={handleLogout}>Logout</button>
          </li>
        )}
      </ul>
    </div>
  ) : null;
};

export default SideBar;
