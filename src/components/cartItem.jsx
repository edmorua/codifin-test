import { Box, Button } from "@mui/material"

export const CartItem = ({cartItem, removeItem}) => {
	const handleDelete = (cartItem) => {
		removeItem(cartItem);
	}
	return (
		<Box sx={{ width: '100vw', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', height: '100px'}}>
			<Box sx={{width: '20vw', height: 'auto', position: 'relative'}}>
				<Box
					component="img"
					src={`data:image/jpeg;base64,${cartItem.image}`}
					alt="Description of image"
					sx={{
							width: '100%',
							height: '100%',
							objectFit: 'contain'
					}}
      	/>
			</Box>
			<Box sx={{display: 'flex', flexDirection: 'column', width: '20vw', justifyContent: 'center'}}>
				<p>{cartItem.productName}</p>
			</Box>
			<Box sx={{display: 'flex', flexDirection: 'column', width: '20vw', justifyContent: 'center'}}>
				<p>{cartItem.amountOfProducts}</p>
			</Box>
			<Box sx={{display: 'flex', flexDirection: 'column', width: '20vw', justifyContent: 'center'}}>
				<p>{`$${cartItem.price * cartItem.amountOfProducts}`}</p>
			</Box>
			<Box>
			</Box>
			<Box sx={{width: '20vw', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
				<Button onClick={handleDelete} variant="contained">delete</Button>
			</Box>
		</Box>
	)
}