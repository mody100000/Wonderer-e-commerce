import { useEffect, useState, useContext } from "react";
import axios from "axios";
import Slider from "../../components/Slider/Slider";
import { tokenContext } from "./../../contexts/authContext";
import styles from "./Home.module.css";
import { CiHeart } from "react-icons/ci";

const Home = () => {
  const { token } = useContext(tokenContext);
  const [data, setData] = useState([]);
  const [iconStates, setIconStates] = useState([]);

  const handleIconClick = (index) => {
    setIconStates((prevStates) =>
      prevStates.map((state, i) => (i === index ? !state : state))
    );
  };
  const getData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/products", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setData(response.data.getingProducts);
      console.log(response.data.getingProducts);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    if (token) getData();
  }, [token]);
  return (
    <>
      <Slider />
      <div className="container py-5">
        <h2 className={`text-center mb-5 text-success`}>Best Sales</h2>
        {data?.length == 0 ? (
          <i className="fa fa-spin fa-3x fa-spinner "></i>
        ) : null}
        <div className="row">
          {data?.map((prod, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card">
                <img
                  src={`http://localhost:8000/images/${
                    prod.image ? encodeURI(prod.image.split("/").pop()) : ""
                  }`}
                  className={styles.product_img}
                  alt={prod.productName}
                />
                <div className="card-body">
                  <h5 className="card-title text-center fw-bold fs-3">
                    {prod.productName}
                  </h5>
                  <p className="card-text mt-4">
                    There are {prod.stock} item in stock
                  </p>
                  <p className="card-text fs-5">Price: ${prod.finalPrice}</p>
                </div>
                <div className="card-footer d-flex justify-content-between align-items-center">
                  <button className="btn btn-success">Add to Cart</button>
                  <span
                    className={`d-flex align-items-center  ${
                      iconStates[index] ? "text-danger" : ""
                    }`}
                    onClick={() => handleIconClick(index)}
                  >
                    <CiHeart size={30} />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
