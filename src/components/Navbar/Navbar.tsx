import styles from "./Navbar.module.css";
import nav from "../../assets/nav.jpg";
import { IoLogIn } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      {" "}
      <nav className={`navbar navbar-expand-lg  ${styles.navbar}`}>
        <div>
          <a className="text-decoration-none">
            <span className={`navbar-brand  ${styles.Wonderer}`}>
              <img src={nav} className={styles.nav_img} /> Wonderer
            </span>
          </a>
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
        </div>
        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav  ms-auto">
            <li className="nav-item">
              <Link
                to="/auth/home"
                className={`nav-link fs-5 fw-bold ${styles.login_links}`}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/auth/products"
                className={`nav-link fs-5 fw-bold ${styles.login_links}`}
              >
                All products
              </Link>
            </li>
            <li className="nav-item">
              <a className={`nav-link fs-5 fw-bold ${styles.login_links}`}>
                Orders
              </a>
            </li>
          </ul>
        </div>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className={`nav-link fs-5 ${styles.login_links}`}>
                <FaRegHeart size={22} />
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link fs-5 ${styles.login_links}`}>
                <IoCartOutline size={25} />
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link fs-5 ${styles.login_links}`}>
                <CgProfile size={25} />
              </a>
            </li>
            <li className="nav-item ">
              <a className={`nav-link fs-5 ${styles.register_links}`}>
                <IoLogIn size={30} />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
