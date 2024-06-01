import { Box, Typography } from "@mui/material"
import { useContext, useEffect, useState } from "react"
import { ProductItem } from "../../components/productItem";
import { ProductContext } from "../../context/productContext";

const ProductList = () => {
	const productContext = useContext(ProductContext);
	const {
		products
	} = productContext
	if(!products) {
		return (
			<Box>
				<Typography>Add a product</Typography>
			</Box>
		)
	}
	return (
		<Box maxWidth={'100%'} key={'product-container'} sx={{
			display: 'flex',
			flexDirection: 'row',
			margin: '1em 1em 1em 1em',
			flexWrap: 'wrap'
		}}>
			{products.map((product,index) => {
				return (
					<ProductItem
						product={product}
						key={index}
					/>
				)
			})}
		</Box>
	)
}

export default ProductList