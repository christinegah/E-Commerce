import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useThemeHook} from './GlobalComponents/ThemeProvider';
import Header from './components/Header';
import { Router } from '@reach/router';
import AddProduct from './components/AddProduct';

//Pages
import Home from './Pages/Home';
import Cart from './Pages/Cart';


function App() {
  const [showAddProduct, setShowAddProduct] = useState(false)
  const [ products, setProducts] = useState([{
    id:1,
    product:'piza',
    title:'food',
    price:'RS. 68'
  }])
  const [theme] = useThemeHook();
  const addProduct = (product) => {
       const id = Math.floor(Math.random() * 
       10000) +1
       const newProduct = { id, ...product}
       setProducts([...products, newProduct])
  }
  return (
    <main className={theme? 'bg-black': 'bg-light-2'} style={{ height: '100vh', overflowY: 'auto'}}>
    <Header onAdd={() => setShowAddProduct
    (!showAddProduct)}/>
    {showAddProduct && <AddProduct onAdd={addProduct}/>}
    <Router>
      <Home path="/"/>
      <Cart path="/cart"/>
    </Router>
    </main>
  );
}

export default App;
