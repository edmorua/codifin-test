import React, { useContext, useState } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ProductContext } from '../../context/productContext';

export const ProductForm = () => {
	const navigate = useNavigate();
  const [productName, setProductName] = useState('');
	const [productDescription, setProductDescription] = useState('');
  const [price, setPrice] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const { updateProducts } = useContext(ProductContext);
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedFile && productName && price) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result.split(',')[1];
        const newProduct = {
          productName,
          price,
					productDescription,
          image: base64String,
        };

        // Retrieve the current array of products from localStorage
        const existingProducts = JSON.parse(localStorage.getItem('products')) || [];
        newProduct.id = existingProducts.length +1;
        // Add the new product to the array
        const newProducts = [...existingProducts, newProduct];
        
        updateProducts(newProducts);

				navigate('/products');
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  return (
    <Container maxWidth="sm" style={{ display:'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
      <Typography variant="h4" component="h1" gutterBottom>
        Add Product
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Product Name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          variant="outlined"
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          variant="outlined"
          fullWidth
          margin="normal"
          required
          type="number"
          inputProps={{ min: 0, step: "0.01" }}
        />
				<TextField
          label="Product Description"
          value={productDescription}
          onChange={(e) => setProductDescription(e.target.value)}
          variant="outlined"
          fullWidth
          margin="normal"
          required
        />
        <TextField
          type="file"
          onChange={handleFileChange}
          variant="outlined"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          required
        />
        {preview && (
          <Box mt={2}>
            <img src={preview} alt="Selected" style={{ maxWidth: '100%' }} />
          </Box>
        )}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          disabled={!selectedFile || !productName || !price}
        >
          Add Product
        </Button>
      </form>
    </Container>
  );
};