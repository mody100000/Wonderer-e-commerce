import styles from "./LogoutNav.module.css";
import nav from "../../assets/nav.jpg";
import { IoLogIn } from "react-icons/io5";
import { RiUserAddFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const LogoutNav = () => {
  return (
    <>
      <nav className={`navbar navbar-expand-lg  ${styles.navbar}`}>
        <Link to="/" className="text-decoration-none">
          <span className={`navbar-brand  ${styles.Wonderer}`}>
            <img src={nav} className={styles.nav_img} /> Wonderer
          </span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                className={`nav-link fs-5 ${styles.login_links}`}
                to="/login"
              >
                Login
                <IoLogIn size={30} />
              </Link>
            </li>
            <li className="nav-item ">
              <Link
                className={`nav-link fs-5 ${styles.register_links}`}
                to="register"
              >
                Register
                <RiUserAddFill size={25} />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default LogoutNav;
