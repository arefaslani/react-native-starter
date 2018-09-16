export const FETCH_PRODUCTS = "FETCH_PRODUCTS";
export const FETCH_PRODUCTS_SUCCEEDED = "FETCH_PRODUCTS_SUCCEEDED";

export function fetchProducts() {
  return { type: FETCH_PRODUCTS };
}
