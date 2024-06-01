import { Box, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { CartItem } from "../../components/cartItem";

export const Cart = () => {
	const [products, setProducts] = useState([]);
	useEffect(() => {
		const stringProducts = localStorage.getItem('cart');
		const newProducts = JSON.parse(stringProducts) || [];
		setProducts(newProducts);
	},[]);
	if(!products || products.length === 0) {
		return (
			<Box>
				<Typography>0 items</Typography>
			</Box>
		)
	}
	const handleDelete = (product) => {
		const deletedProduct = products.find(p=> p.id === product.id);
		deletedProduct.amountOfProducts = deletedProduct.amountOfProducts -1;
		let updatedProducts = [...products];
		if(deletedProduct.amountOfProducts === 0) {
			updatedProducts = updatedProducts.filter(p => p.id !== product.id);
		}
		setProducts(updatedProducts);
		localStorage.setItem('cart', JSON.stringify(updatedProducts));

	}
	return (
		<Box maxWidth={'100%'} key={'product-container'} sx={{
			display: 'flex',
			flexDirection: 'row',
			margin: '1em 1em 1em 1em',
			flexWrap: 'wrap',
		}}>
			<Box maxWidth={'100vw'} sx={{display: 'flex', flexDirection: 'row'}}>
				<Box width={'20vw'}>
				</Box>
				<Box width={'20vw'}>
					<Typography variant="h6">NAME</Typography>
				</Box>
				<Box width={'20vw'}>
					<Typography variant="h6">AMOUNT</Typography>

				</Box>
				<Box width={'20vw'}>
					<Typography variant="h6">PRICE</Typography>

				</Box>
				<Box width={'20vw'}>
				</Box>
			</Box>
			{products.map((product,index) => {
				return (
					<CartItem
						cartItem={product}
						key={index}
						removeItem={() => handleDelete(product)}
					/>
				)
			})}
		</Box>
	)
}