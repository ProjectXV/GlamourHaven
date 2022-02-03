import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartItems"))
      ? JSON.parse(localStorage.getItem("cartItems"))
      : []
  );
  //   const history = useHistory();

  //   useEffect(() => {
  //     const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  //     setUser(userInfo);

  //     if (!userInfo) history.push("/");
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, [history]);

  return (
    <AppContext.Provider
      value={{
        cartItems,
        setCartItems,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const AppState = () => {
  return useContext(AppContext);
};

export default AppProvider;
