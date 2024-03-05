import styles from "./Login.module.css";
import logo from "../../assets/logo.jpg";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <>
      <div className={styles.container}>
        <form>
          <div className={styles.form_title}>
            <img className={styles.header_logo} src={logo} alt="logo" />
            <h1>Login Here</h1>
          </div>
          <div className={styles.inputs_grid}>
            <div className={styles.input_container}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                width="20"
                viewBox="0 0 512 512"
              >
                <path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" />
              </svg>
              <input type="email" required placeholder="email" />
            </div>
            <div className={styles.input_container}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                width="20"
                viewBox="0 0 448 512"
              >
                <path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z" />
              </svg>
              <input type="password" required placeholder="password" />
            </div>
          </div>

          <button className={styles.submit_btn}>Lgoin</button>
          <h3>
            dont have an account ?{" "}
            <Link to="/register" className={styles.link}>
              Register
            </Link>
          </h3>
        </form>
      </div>
    </>
  );
};

export default Login;
