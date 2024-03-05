import styles from "./Register.module.css";
import logo from "../../assets/logo.jpg";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router";
import * as Yup from "yup";
import { useFormik } from "formik";

const Register = () => {
  const navigate = useNavigate();
  //TODO:how the fk i will verfiy email
  const register = async (values) => {
    console.log(values);
    const { data } = await axios.post(
      "http://localhost:8000/user/signup",
      values
    );
    console.log(data);
    if (data.message == "added") navigate("/login");
  };
  const validationSchema = Yup.object({
    userName: Yup.string()
      .min(3, "name is too short")
      .max(15, "name is too long")
      .required("user name is required"),
    email: Yup.string().email("invalid email").required("email is required"),
    address: Yup.array().of(
      Yup.object({
        street: Yup.string().required("street is required"),
        city: Yup.string().required("city is required"),
        country: Yup.string().required("country is required"),
      })
    ),
    password: Yup.string().required(),
    CPassword: Yup.string().oneOf(
      [Yup.ref("password")],
      "password and confarm password should be same"
    ),
  });
  const initialValues = {
    userName: "",
    email: "",
    password: "",
    CPassword: "",
    address: [{ street: "", city: "", country: "" }],
  };
  const registerForm = useFormik({
    initialValues,
    validationSchema,
    onSubmit: register,
  });

  return (
    <>
      <div className={styles.container}>
        <form onSubmit={registerForm.handleSubmit}>
          <div className={styles.form_title}>
            <img className={styles.header_logo} src={logo} alt="logo" />
            <h1>Create Account</h1>
          </div>
          <div className={styles.inputs_grid}>
            <div className={styles.input_container}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                width="20"
                viewBox="0 0 448 512"
              >
                <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" />
              </svg>
              <input
                type="text"
                value={registerForm.values.userName}
                onChange={registerForm.handleChange}
                name="userName"
                onBlur={registerForm.handleBlur}
                required
                placeholder="user name"
              />
              {registerForm.errors.userName && registerForm.touched.userName ? (
                <div className="alert alert-danger mt-5">
                  {registerForm.errors.userName}
                </div>
              ) : null}
            </div>
            <div className={styles.input_container}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                width="20"
                viewBox="0 0 512 512"
              >
                <path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" />
              </svg>
              <input
                type="email"
                value={registerForm.values.email}
                onChange={registerForm.handleChange}
                name="email"
                onBlur={registerForm.handleBlur}
                required
                placeholder="email"
              />
              {registerForm.errors.email && registerForm.touched.email ? (
                <div className="alert alert-danger mt-5">
                  {registerForm.errors.email}
                </div>
              ) : null}
            </div>
            <h4 className="fw-bold text-center mt-4">Address</h4>
            <div className={styles.input_container}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                width="20"
                viewBox="0 0 576 512"
              >
                <path d="M256 32H181.2c-27.1 0-51.3 17.1-60.3 42.6L3.1 407.2C1.1 413 0 419.2 0 425.4C0 455.5 24.5 480 54.6 480H256V416c0-17.7 14.3-32 32-32s32 14.3 32 32v64H521.4c30.2 0 54.6-24.5 54.6-54.6c0-6.2-1.1-12.4-3.1-18.2L455.1 74.6C446 49.1 421.9 32 394.8 32H320V96c0 17.7-14.3 32-32 32s-32-14.3-32-32V32zm64 192v64c0 17.7-14.3 32-32 32s-32-14.3-32-32V224c0-17.7 14.3-32 32-32s32 14.3 32 32z" />
              </svg>
              <input
                type="text"
                value={registerForm.values.address[0].street}
                onChange={registerForm.handleChange}
                name="address[0].street"
                onBlur={registerForm.handleBlur}
                required
                placeholder="Street"
              />
              {registerForm.errors.street && registerForm.touched.street ? (
                <div className="alert alert-danger mt-5">
                  {registerForm.errors.street}
                </div>
              ) : null}
            </div>

            <div className={styles.input_container}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                width="20"
                viewBox="0 0 640 512"
              >
                <path d="M480 48c0-26.5-21.5-48-48-48H336c-26.5 0-48 21.5-48 48V96H224V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V96H112V24c0-13.3-10.7-24-24-24S64 10.7 64 24V96H48C21.5 96 0 117.5 0 144v96V464c0 26.5 21.5 48 48 48H304h32 96H592c26.5 0 48-21.5 48-48V240c0-26.5-21.5-48-48-48H480V48zm96 320v32c0 8.8-7.2 16-16 16H528c-8.8 0-16-7.2-16-16V368c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16zM240 416H208c-8.8 0-16-7.2-16-16V368c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16zM128 400c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V368c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32zM560 256c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H528c-8.8 0-16-7.2-16-16V272c0-8.8 7.2-16 16-16h32zM256 176v32c0 8.8-7.2 16-16 16H208c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16zM112 160c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h32zM256 304c0 8.8-7.2 16-16 16H208c-8.8 0-16-7.2-16-16V272c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32zM112 320H80c-8.8 0-16-7.2-16-16V272c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16zm304-48v32c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16V272c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16zM400 64c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16V80c0-8.8 7.2-16 16-16h32zm16 112v32c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16z" />
              </svg>
              <input
                type="text"
                value={registerForm.values.address[0].city}
                onChange={registerForm.handleChange}
                name="address[0].city"
                onBlur={registerForm.handleBlur}
                required
                placeholder="City"
              />
              {registerForm.errors.city && registerForm.touched.city ? (
                <div className="alert alert-danger mt-5">
                  {registerForm.errors.city}
                </div>
              ) : null}
            </div>

            <div className={styles.input_container}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                width="20"
                viewBox="0 0 640 512"
              >
                <path d="M336 0c-26.5 0-48 21.5-48 48v92.1l71.4 118.4c2.5-1.6 5.4-2.5 8.6-2.5h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-3.5l73.8 122.4c12.4 20.6 12.9 46.3 1.2 67.3c-.4 .8-.9 1.6-1.4 2.3H592c26.5 0 48-21.5 48-48V240c0-26.5-21.5-48-48-48H568V120c0-13.3-10.7-24-24-24s-24 10.7-24 24v72H480V48c0-26.5-21.5-48-48-48H336zm32 64h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16V80c0-8.8 7.2-16 16-16zM352 176c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16V176zm160 96c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H528c-8.8 0-16-7.2-16-16V272zm16 80h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H528c-8.8 0-16-7.2-16-16V368c0-8.8 7.2-16 16-16zM224 188.9L283.8 288H223l-48 64-24.6-41.2L224 188.9zm29.4-44.2C247.1 134.3 236 128 224 128s-23.1 6.3-29.4 16.7L5.1 458.9c-6.5 10.8-6.7 24.3-.7 35.3S22 512 34.5 512H413.5c12.5 0 24-6.8 30.1-17.8s5.8-24.5-.7-35.3L253.4 144.7z" />
              </svg>
              <input
                type="text"
                value={registerForm.values.address[0].country}
                onChange={registerForm.handleChange}
                name="address[0].country"
                onBlur={registerForm.handleBlur}
                required
                placeholder="Country"
              />
              {registerForm.errors.country && registerForm.touched.country ? (
                <div className="alert alert-danger mt-5">
                  {registerForm.errors.country}
                </div>
              ) : null}
            </div>
            <h4 className="fw-bold text-center">Password</h4>
            <div className={styles.input_container}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                width="20"
                viewBox="0 0 448 512"
              >
                <path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z" />
              </svg>
              <input
                type="password"
                value={registerForm.values.password}
                onChange={registerForm.handleChange}
                name="password"
                onBlur={registerForm.handleBlur}
                required
                placeholder="password"
              />
              {registerForm.errors.password && registerForm.touched.password ? (
                <div className="alert alert-danger mt-5">
                  {registerForm.errors.password}
                </div>
              ) : null}
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
              <input
                type="password"
                value={registerForm.values.CPassword}
                onChange={registerForm.handleChange}
                name="CPassword"
                onBlur={registerForm.handleBlur}
                placeholder="repet password"
              />
              {registerForm.errors.CPassword &&
              registerForm.touched.CPassword ? (
                <div className="alert alert-danger mt-5">
                  {registerForm.errors.CPassword}
                </div>
              ) : null}
            </div>
          </div>

          <button type="submit" className={styles.submit_btn}>
            Regester Now
          </button>
          <h3>
            alredy have an account ?{" "}
            <Link to="/login" className={styles.link}>
              login
            </Link>
          </h3>
        </form>
      </div>
    </>
  );
};

export default Register;
