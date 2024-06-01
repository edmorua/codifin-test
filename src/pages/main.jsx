import { Box, Container } from '@mui/material'
import React from 'react'
import { NavBar } from '../components/navBar'
import { Outlet } from 'react-router-dom'
import { ProductProvider } from '../context/productContext'


export const Main = () => {
	return (
		<ProductProvider>
			<Container maxWidth="100vw" sx={{padding: '0px !important'}}>
				<Box sx={{ bgcolor: 'whiter', minHeight: '20px', flex: 'row'}}>
					<NavBar/>
				</Box>
				<Box maxWidth="100vw" marginTop='2em' >
					<Outlet />
				</Box>
			</Container>
		</ProductProvider>
		
	)
}