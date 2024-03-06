import { useEffect } from "react";
import { createContext, useState } from "react";

export const tokenContext = createContext();

const TokenContextProvider = (props) => {
  const [token, setToken] = useState(null);
  useEffect(() => {
    //set the token if exist
    const userToken = localStorage.getItem("token");
    if (!userToken) return;
    setToken(userToken);
  }, []);
  return (
    <tokenContext.Provider value={{ token, setToken }}>
      {props.children}
    </tokenContext.Provider>
  );
};

export default TokenContextProvider;
