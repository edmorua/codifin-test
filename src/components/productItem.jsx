import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardMedia } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const ProductItem = ({product}) => {
	const navigate = useNavigate();

	const handleClickProduct = (evt) => {
		evt.preventDefault();
		navigate(`/products/${product.id}`)
	}
	const handleAddToCart = (evt) => {
		evt.preventDefault();
		evt.stopPropagation()
		const existingProducts = JSON.parse(localStorage.getItem('cart')) || [];
    let alreadyInCart = existingProducts.find((p) => p.id === product.id)
		if(alreadyInCart) {
			alreadyInCart.amountOfProducts = alreadyInCart.amountOfProducts + 1;
			console.log(existingProducts);
			localStorage.setItem('cart', JSON.stringify(existingProducts));
		} else {
			product.amountOfProducts = 1;
			console.log({product});
			localStorage.setItem('cart', JSON.stringify([...existingProducts,product]));

		}
		console.log('Product added to localStorage:', product);
	}
  return (
    <Card 
			sx={{
				maxWidth: '325px',
				padding: "0.1em",
				margin: '1em'
			}}
		>
			<CardActionArea onClick={handleClickProduct}>
				<CardMedia
					component="img"
					height="250"
					image={`data:image/jpeg;base64,${product.image}`}
					alt={"alt"}
					title={"titleasdasdsada"}
					sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						{product.productName}
					</Typography>
					<Typography variant="body2" color="text.secondary">
						{product.productDescription}
					</Typography>
				</CardContent>
				<CardActions sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
					<Typography variant='h6'>
						{`$${product.price}`}
					</Typography>
					<Button size="small" variant='contained' onClick={handleAddToCart}>Add to Cart</Button>
				</CardActions>
			</CardActionArea>
    </Card>
  );
}