// import { useToast } from "@chakra-ui/react";

export const removeItemFromCart = (
  cartItems,
  cartItemToRemove,
  setCartItems
) => {
  const existingCartItem = cartItems.find(
    (item) => item.id === cartItemToRemove.id
  );
  if (existingCartItem) {
    return (
      setCartItems(cartItems.filter((item) => item.id !== cartItemToRemove.id)),
      localStorage.setItem("cartItems", JSON.stringify(cartItems)),
      console.log("Successfully removed")
    );
  }
};

export const addItemToCart = (cartItems, itemToAdd, setCartItems) => {
  const existingCartItem = cartItems.find((item) => item.id === itemToAdd.id);

  if (existingCartItem) {
    return (
      setCartItems(
        cartItems.map((item) =>
          item.id === itemToAdd.id
            ? { ...itemToAdd, quantity: item.quantity + 1 }
            : item
        )
      ),
      localStorage.setItem("cartItems", JSON.stringify(cartItems)),
      console.log("Item Quantity increased")
    );
  } else {
    return (
      setCartItems([...cartItems, { ...itemToAdd, quantity: 1 }]),
      localStorage.setItem("cartItems", JSON.stringify(cartItems)),
      console.log("Item added to cart")
    );
  }
};

export const clearCart = (cartItems, setCartItems) => {
  return (
    setCartItems([]),
    localStorage.setItem("cartItems", JSON.stringify(cartItems)),
    console.log("Cart cleared")
  );
};

export const decreaseProductQuantity = (
  cartItems,
  cartItemToRemove,
  setCartItems
) => {
  const existingCartItem = cartItems.find(
    (item) => item.id === cartItemToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return (
      setCartItems(cartItems.filter((item) => item.id !== cartItemToRemove.id)),
      localStorage.setItem("cartItems", JSON.stringify(cartItems)),
      console.log("Product removed from cart")
    );
  } else {
    return (
      setCartItems(
        cartItems.map((item) =>
          item.id === cartItemToRemove.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      ),
      localStorage.setItem("cartItems", JSON.stringify(cartItems)),
      console.log("Decreased product quantity")
    );
  }
};

// export const getTotals = (state, action) => {
//     let { total, qty } = state.cartItems.reduce(
//       (cartTotal, cartItem) => {
//         const { item_price, quantity } = cartItem;
//         const itemTotal = item_price * quantity;

//         cartTotal.total += itemTotal;
//         cartTotal.quantity += quantity;

//         return cartTotal;
//       },
//       {
//         total: 0,
//         qty: 0,
//       }
//     );
//     total = parseFloat(total.toFixed(2));
//     state.cartTotalQuantity = qty;
//     state.cartTotalAmount = total;
// };
