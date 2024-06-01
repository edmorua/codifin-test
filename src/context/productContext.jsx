import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({children}) => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const localStorageProducts = JSON.parse(localStorage.getItem('products')) || [];
		setProducts(localStorageProducts);
	},[])

	const updateProducts = (newProducts) => {
		setProducts(newProducts);
		localStorage.setItem('products', JSON.stringify(newProducts));
	}
	const searchProducts = (searchedProducts) => {
		setProducts(searchedProducts);
	}
	return (
		<ProductContext.Provider value={{ products, updateProducts, searchProducts}}>
			{children}
		</ProductContext.Provider>
	)
}