import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Main } from './pages/main';
import { Product } from './views/product/product';
import ProductList  from './views/productList/productList';
import { Cart } from './views/cart/cart';
import { ProductForm } from './views/productForm/productForm';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Main />}>
            <Route index element={<ProductList />} />
            <Route path='/products' element={<ProductList/>} />
            <Route path='products/:id' element={<Product />} />
            <Route path='shopping-cart' element={<Cart/>} />
            <Route path='add-product' element={<ProductForm />}/>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
