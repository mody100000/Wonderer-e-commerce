import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.webp";
import { Carousel } from "react-bootstrap";
import styles from "./Slider.module.css";
const Slider = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img className={styles.slider} src={img2} alt="First slide" />
          <Carousel.Caption>
            <h3>discover a world of endless</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className={styles.slider} src={img3} alt="Second slide" />
          <Carousel.Caption>
            <h3>discover a world of endless</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className={styles.slider} src={img4} alt="Third slide" />
          <Carousel.Caption>
            <h3>discover a world of endless</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      );
    </>
  );
};

export default Slider;
