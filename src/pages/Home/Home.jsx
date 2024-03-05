import { useEffect, useState } from "react";
import axios from "axios";
import Slider from "../../components/Slider/Slider";

const Home = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    //FIXME:fix the token that not recognized
    const { data } = await axios.get("http://localhost:8000/products");
    console.log(data.data);
    setData(data.data);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Slider />
      <div className="container py-5">
        {data?.length == 0 ? (
          <i className="fa fa-spin fa-3x fa-spinner "></i>
        ) : null}
        <div className="row">
          {data?.map((prod, index) => (
            <div className="col-md-4 p-4" key={index}>
              <img src={prod.image} className="w-100" alt="" />
              <h3>{prod.productName}</h3>
              <p>{prod.stock}</p>
              <p>{prod.finalPrice}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
