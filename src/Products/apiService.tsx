import { CartItemType } from "./types";

// fetch products from fake API
export const getProducts = async (): Promise<CartItemType[]> => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
    return [];
  }
};
