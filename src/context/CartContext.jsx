import { createContext, useContext, useState } from "react";

export const CartContext = createContext();
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product, qty = 1) => {
        setCart((prev) => {
            const exists = prev.find((item) => item.id === product.id)
            if (exists) {
                return prev.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + qty } : item);

            }
            else {
                return [...prev, { ...product, quantity: qty }];
            }
        });
    };

    const updateQuantity = (id, delta) => {
        setCart((prev) =>
            prev
                .map((item) =>
                    item.id === id ? { ...item, quantity: item.quantity + delta } : item
                )
                .filter((item) => item.quantity > 0)
        );
    };


    const removeItem = (id) => {
        setCart((prev) => prev.filter((item) => item.id !== id));
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, updateQuantity, removeItem }}>
            {children}
        </CartContext.Provider>
    )
}
export const usecart = () => useContext(CartContext);

