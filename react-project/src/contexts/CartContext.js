const React = require("react");
const { createContext, useState } = React;
const CartContext = createContext();

const CartDataProvider = ({ children }) => {
  const [qty, setQty] = useState(null);

  return (
    <CartContext.Provider value={{ qty, setQty }}>
      {children}
    </CartContext.Provider>
  );
};

export {CartDataProvider , CartContext};
