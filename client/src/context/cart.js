import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
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
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const CartState = () => {
  return useContext(CartContext);
};
