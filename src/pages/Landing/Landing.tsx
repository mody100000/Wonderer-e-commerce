import styles from "./Landing.module.css";
import wonderer from "../../assets/logo.jpg";
import Footer from "../../components/Footer/Footer";

const Landing = () => {
  return (
    <>
      <div className="h-70vh flex flex-col items-center pt-24 overflow-hidden position-relative">
        <div
          className={`mx-auto container-lg px-4 px-lg-0 d-flex flex-column gap-12 position-relative ${styles.main}`}
        >
          <div
            className={`blur-3xl bg-gradient-to-r from-secondary-2 to-red-400 ${styles.shadow2}`}
          ></div>
          <div className="d-flex flex-row justify-content-between">
            <img className={styles.wonderer_img} src={wonderer} />
            <div className="d-flex flex-column align-self-center">
              <h3 className="text-center  gap-2 font-c display-4 md-display-4 align-self-center">
                Welcome to{" "}
                <span className={styles.Wonderer_text}>Wonderer</span>{" "}
                E-Commerce{" "}
                <span className={styles.endless}>
                  Discover a world of endless
                </span>
              </h3>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Landing;
