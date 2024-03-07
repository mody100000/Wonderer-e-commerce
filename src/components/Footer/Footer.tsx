import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <>
      <footer
        className={` text-center text-lg-start fixed-bottom ${styles.footer}`}
      >
        <div className="text-center p-3">
          © 2024 Copyright : <span className="fw-bold">ITI</span>{" "}
        </div>
      </footer>
    </>
  );
};

export default Footer;
