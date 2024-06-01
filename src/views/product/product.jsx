import { Box } from "@mui/material"
import { useMemo } from "react";
import { useParams } from "react-router-dom"
import { ProductItem } from "../../components/productItem";

export const Product = () => {
	const {id} = useParams();
	const product = useMemo(() => {
		const getAllProducts = JSON.parse(localStorage.getItem('products')) || [];
		return getAllProducts.find(p => p.id === Number.parseInt(id));
	},[])
	return (
		<ProductItem
			product={product}
		/>
	)
}