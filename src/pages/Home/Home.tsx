import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";
import Slider from "../../components/Slider/Slider";

const Home = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const { data } = await axios.get("http://localhost:8000/products");
    console.log(data.data);
    setData(data.data);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Navbar />
      <Slider />
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error veniam,
        molestias a excepturi, nemo deserunt aperiam dicta corporis, quidem
        deleniti odit repellendus explicabo totam sed provident accusantium eum
        aliquid autem.
      </div>
    </>
  );
};

export default Home;
