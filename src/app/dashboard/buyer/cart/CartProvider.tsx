"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { ReactNode } from "react";

// Define Cart Item Type
type CartItem = {
  title: string;
  quantity: number;
  price: number;
  image: string;
};

// Cart Context
const CartContext = createContext<{
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (itemTitle: string) => void;
}>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
});

// Cart Provider Component
export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (error) {
        console.error("Error parsing cart from localStorage:", error);
        localStorage.removeItem("cart"); // Clear invalid data
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  // Add item to cart
  const addToCart = (item: CartItem) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((i) => i.title === item.title);
      if (existingItem) {
        return prevCart.map((i) =>
          i.title === item.title ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  // Remove item from cart
  const removeFromCart = (itemTitle: string): void => {
    setCart((prevCart) => prevCart.filter((i) => i.title !== itemTitle));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

// Custom Hook for Using Cart
export function useCart() {
  return useContext(CartContext);
}